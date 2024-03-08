<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Testimonial;

class FrontController extends Controller
{
    public function index()
    {
        $projects = Project::where('status', 1)->latest()->with('category:id,title')->get(['id', 'title', 'slug', 'category_id', 'image']);
        $blogs = Blog::where('status', 1)->latest()->with('image:id,path_name,key_id')->get(['id', 'title', 'slug']);
        $testimonials = Testimonial::where('status', 1)->get();
        $counter = Setting::get(["satisfied_count","finish_project_count","experts_count","media_post_count"]);

        return response()->json([
            "projects" => $projects,
            "blogs" => $blogs,
            "testimonials" => $testimonials,
            "counter" => $counter
        ]);
    }
    public function blog(string $slug)
    {
        $blog = Blog::where('slug', $slug)->with(["category:id,title"])->first();
        return response()->json(["blog" => $blog]);
    }
    public function project(string $slug)
    {
        $project = Project::where('slug', $slug)->with(["category:id,title"])->first();
        return response()->json(["project" => $project]);
    }
    public function settings(){
        $settings = Setting::all();
        return response()->json(["settings" => $settings]);
    }
}
