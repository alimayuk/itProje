<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       try {
        $settings = Setting::all();
        return response()->json(["settings" => $settings, "status" =>200]);
       } catch (\Throwable $th) {
        return response()->json(["message" => "Server Error", "status" => 500]);
       }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->except('_token');
            if ($request->image) {
                $image = $request->image;
                $imageName = $image->getClientOriginalExtension();
                $uniqueImageName = time() . rand(99, 9999) . "." . $imageName;
                $image->storeAs('public/images', $uniqueImageName);
                $data['logo_pathname'] = $uniqueImageName;
            }
            Setting::create($data);
            return response()->json(["message" => "Setting created", "status" => 201]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "Server error", "status" => 500]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $setting = Setting::find($id);
            if(is_null($setting)){
                return response()->json(["message" => "Setting not found", "status" => 404]);
            }  
            return response()->json(["settings" => $setting, "status" => 200]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "Server error", "status" => 500]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       try {
        $setting = Setting::find($id);
        if (is_null($setting)) {
            return response()->json(["message" => "Setting not found", "status" => 404]);
        }
        $data = $request->except('_token');

       if ($request->hasFile('logo_pathname')) {
            $image = $request->file('logo_pathname');
            $uniqueImageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $uniqueImageName);

            if ($setting->logo_pathname && file_exists(public_path('storage/images/' . $setting->logo_pathname))) {
               File::delete(public_path('storage/images/' . $setting->logo_pathname));
            }
            $data['logo_pathname'] = $uniqueImageName;
        }
        $data["user_id"] = 1; 
        $setting->update($data);
        return response()->json(["message" => "Setting updated", "status" => 201]);
       } catch (\Throwable $th) {
        return response()->json(["message" => "server error", "status" => 500]);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

    }
}
