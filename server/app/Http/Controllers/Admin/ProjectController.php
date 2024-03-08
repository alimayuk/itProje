<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProjectRequest;
use App\Http\Requests\Admin\ProjeRequest;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Symfony\Component\DomCrawler\Crawler;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::with('category:id,title')->orderBy("created_at", "desc")->get();
        return response()->json(["projects" => $projects, "status" => 200]);
    }
  
    /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request)
    {
        $data = $request->except('_token');
        $slug = Str::slug($data['title']);
        $data['slug'] = $this->slugCheck($slug);
        if ($request->images) {
            foreach ($request->images as $image) {
                $imageName = $image->getClientOriginalExtension();
                $uniqueImageName = time() . rand(99, 9999) . "." . $imageName;
                $image->move(public_path('storage/images'), $uniqueImageName);
                $data['image'] = $uniqueImageName;
            }
        }
        Project::create($data);
        return response()->json(["message" => "Project created", "status" => 201]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $project = Project::where('slug', $slug)->with("category:id,title")->first();
        if (is_null($project)) {
            return response()->json(["message" => "Project not found", "status" => 404]);
        }
        return response()->json(["project" => $project, "status" => 200]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProjectRequest $request, string $id)
    {
        $project = Project::find($id);
        if (is_null($project)) {
            return response()->json(["message" => "Project not found", "status" => 404]);
        }
        $data = $request->except('_token');
        $slug = Str::slug($data['title']);
        $data['slug'] = $this->slugCheck($slug);
        $project->update($data);
        return response()->json(["message" => "Project updated", "status" => 201]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project = Project::find($id);
        $this->deleteImagesFromPost($project->body);
        
        if (is_null($project)) {
            return response()->json(["message" => "Project not found", "status" => 404]);
        }
        $project->delete();
        return response()->json(["message" => "Project deleted", "status" => 201]);
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

    
    /**
     *
     * @param  string  $content
     * @return void
     */
    public function deleteImagesFromPost($postContent)
    {
        $crawler = new Crawler($postContent);
        $imageSrcs = $crawler->filter('img')->extract(['src']);

        foreach ($imageSrcs as $src) {
            $fileName = basename($src);
            if (file_exists(public_path('storage/images/' . $fileName))) {
                File::delete(public_path('storage/images/' . $fileName));
            }
        }
    }
}
