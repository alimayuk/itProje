<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $blogs = Blog::where('status', 1)->with("category:id,title")->orderBy('created_at', 'DESC')->get();
            return response()->json(["blogs" => $blogs, "status" => 200]);
        } catch (\Throwable $th) {
           return response()->json(["message" => "server error", "status" =>500]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'title' => ['required', 'string', 'max:90', 'min:5'],
                'body' => ['required', 'string','min:25']
            ]);
    
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $data = $request->except('_token');
            $slug = Str::slug($data['title']);
            $data['slug'] = $this->slugCheck($slug);
            
            Blog::create($data);
            return response()->json(["message" => "Blog created", "status" => 201]);
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
        $blog = Blog::where("status",1)->with("category:id,title")->find($id);
        if(is_null($blog)){
            return response()->json(["message" => "Blog not found", "status" => 404]);
        }
        return response()->json(["blog" => $blog, "status" => 200]);
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
            $blog = Blog::find($id);
            if(is_null($blog)){
                return response()->json(["message" => "Blog not found", "status" => 404]);
            }
            $validator = Validator::make($request->all(), [
                'title' => ['required', 'string', 'max:90', 'min:5'],
                'body' => ['required', 'string','min:25']
            ]);
    
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            $data = $request->except('_token');
            $slug = Str::slug($data['title']);
            $data['slug'] = $this->slugCheck($slug);
            $blog->update($data);
            return response()->json(["message" => "Blog updated", "status" => 201]);
        } catch (\Throwable $th) {
            return response()->json(["message" => "Server error", "status" => 500]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $blog = Blog::find($id);
            if(is_null($blog)){
                return response()->json(["message" => "Blog not found", "status" => 404]);
            }
            $blog->delete();
            return response()->json(["message" => "Blog deleted", "status" => 201]);
        } catch (\Throwable $th) {
           return response()->json(["message"=>"Server Error", "status" => 500]);
        }
    }

    public function slugCheck(string $text)
    {
        $slug = Blog::where("slug", $text)->first();
        if (is_null($slug)) {
            return $text;
        } else {
            $text = Str::slug($text) . "-" . rand(1, 1000);
            return $text;
        }
    }
}
