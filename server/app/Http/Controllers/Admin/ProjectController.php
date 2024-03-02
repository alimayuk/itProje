<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $projects = Project::where('status', 1)->with('category:id,title')->orderBy("created_at","desc")->get();
            return response()->json(["projects" => $projects, "status" =>200]);
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
                'body' => ['required', 'string', 'min:25']
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            $data = $request->except('_token');
            $slug = Str::slug($data['title']);
            $data['slug'] = $this->slugCheck($slug);
            Project::create($data);
            return response()->json(["message" => "Project created", "status" => 201]);
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
            $project = Project::find($id);
        if(is_null($project)){
            response()->json(["message" => "Project not found", "status" => 404]);
        }  
        return response()->json(["project" => $project, "status" => 200]);
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
        $project = Project::find($id);
        if(is_null($project)){
            return response()->json(["message" => "Project not found", "status" => 404]);
        }
        $data = $request->except('_token');
        $slug = Str::slug($data['title']);
        $data['slug'] = $this->slugCheck($slug);
        $project->update($data);
        return response()->json(["message" => "Project updated", "status" =>201]);
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
        $project = Project::find($id);
       if(is_null($project)){
           return response()->json(["message" => "Project not found", "status" => 404]);
       }
       $project->delete();
       return response()->json(["message" => "Project deleted", "status" => 201]);
       } catch (\Throwable $th) {
        return response()->json(["message" =>"server error", "status" =>500]);
       }
    }

    public function slugCheck(string $text)
    {
        $slug = Project::where("slug", $text)->first();
        if (is_null($slug)) {
            return $text;
        } else {
            $text = Str::slug($text) . "-" . rand(1, 1000);
            return $text;
        }
    }
}
