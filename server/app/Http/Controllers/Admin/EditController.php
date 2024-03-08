<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EditController extends Controller
{
    public function storeimage(Request $request){
        $request->except('_token');
        if (!$request->file) {
            return response()->json(['upload_file_not_found'], 400);
        }
        if ($request->file) {
            $image = $request->file;
            $uniqueImageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/images', $uniqueImageName);

            return response()->json(["data" => $uniqueImageName, "status" =>200]);
        }
    }
}
