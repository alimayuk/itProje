<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $testimonials = Testimonial::where("status", 1)->orderBy("created_at", "desc")->get();
            return response()->json(["testimonials" => $testimonials, "status" => 200]);
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
            $validator = Validator::make(
                $request->all(),
                [
                    "name" => ["required", "string", "max:30", "min:3"],
                    "comment" => ["required", "string", "max:80", "min:10"]
                ]
            );
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $data = $request->except('_token');
            if (!$request->image) {
                return response()->json(['message' => 'file not found', "status" => 400]);
            }
            if ($request->image) {
                $image = $request->image;
                $imageName = $image->getClientOriginalExtension();
                $uniqueImageName = time() . rand(99, 9999) . "." . $imageName;
                $image->storeAs('public/images', $uniqueImageName);
                $data['image'] = $uniqueImageName;
            }
            Testimonial::create($data);
            return response()->json(["message" => "Testimonial created", "status" => 201]);
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
            $testimonial = Testimonial::where("status", 1)->find($id);
            if (is_null($testimonial)) {
                return response()->json(["message" => "Testimonial not found", "status" => 404]);
            }
            return response()->json(["testimonial" => $testimonial, "status" => 200]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "server error", "status" => 500]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $testimonial = Testimonial::find($id);
            if (is_null($testimonial)) {
                return response()->json(["message" => "Testimonial not found", "status" => 404]);
            }
            $data = $request->except('_token');
            if (!is_null($request->image)) {
                $image = $request->image;
                $imageName = $image->getClientOriginalExtension();
                $uniqueImageName = time() . rand(99, 9999) . "." . $imageName;
                $image->storeAs('public/images', $uniqueImageName);

                if (file_exists(public_path('storage/images/' . $testimonial->image))) {
                    File::delete(public_path('storage/images/' . $testimonial->image));
                }

                $data['image'] = $uniqueImageName;
            }
            $testimonial->update($data);
            return response()->json(["message" => "Testimonial updated", "status" => 201]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "server error", "status" => 500]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $testimonial = Testimonial::find($id);
            if (is_null($testimonial)) {
                return response()->json(["message" => "Testimonial not found", "status" => 404]);
            }
            if (file_exists(public_path('storage/images/' . $testimonial->image))) {
                File::delete(public_path('storage/images/' . $testimonial->image));
            }
            $testimonial->delete();
            return response()->json(["message" => "Testimonial deleted", "status" => 201]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "server error", "status" => 500]);
        }
    }
}
