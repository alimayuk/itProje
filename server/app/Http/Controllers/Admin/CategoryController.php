<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy("created_at", "desc")->get();
        return response()->json(["categories" => $categories, "status" => 200]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => ['required', 'string', 'max:255', 'min:5'],
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $data = $request->except('_token');
            $slug = Str::slug($data['title']);
            $data['slug'] = $this->slugCheck($slug);
            $data["user_id"] = "1";
            Category::create($data);
            return response()->json(["message" => "Category created", "status" => 201]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "Server error", "status" => 500]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $category = Category::where("slug", $slug)->first();
        if (!$category) {
            return response()->json(["message" => "Category not found", "status" => 404]);
        }
        return response()->json(["category" => $category, "status" => 200]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $category = Category::find($id);
            if (is_null($category)) {
                return response()->json(["message" => "Category not found", "status" => 404]);
            }
            $validator = Validator::make($request->all(), [
                'title' => ['required', 'string', 'max:255', 'min:5'],
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $data = $request->except('_token');
            $slug = Str::slug($data['title']);
            $data['slug'] = $this->slugCheck($slug);
            $category->update($data);
            return response()->json(["message" => "Category updated", "status" => 201]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "Server error", "status" => 500]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);
        if (is_null($category)) {
            return response()->json(["message" => "Category not found", "status" => 404]);
        }
        $category->delete();
        return response()->json(["message" => "Category deleted", "status" => 201]);
    }

    public function slugCheck(string $text)
    {
        $slug = Category::where("slug", $text)->first();
        if (is_null($slug)) {
            return $text;
        } else {
            $text = Str::slug($text) . "-" . rand(1, 1000);
            return $text;
        }
    }
}
