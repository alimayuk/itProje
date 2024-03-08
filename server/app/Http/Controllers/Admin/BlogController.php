<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BlogRequest;
use App\Models\Blog;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Symfony\Component\DomCrawler\Crawler;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::with("category:id,title")->orderBy('created_at', 'DESC')->get();
        return response()->json(["blogs" => $blogs, "status" => 200]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogRequest $request)
    {
        $data = $request->except('_token');
        $slug = Str::slug($data['title']);
        $data['slug'] = $this->slugCheck($slug);
        $image = $request->file('image');
        $uniqueImageName = time() . '_' . $image->getClientOriginalName();
        $image->storeAs('public/images', $uniqueImageName);

        $data['image'] = $uniqueImageName;
        $blog =  Blog::create($data);

        if ($request->images) {
            foreach ($request->images as $image) {
                $imageName = $image->getClientOriginalExtension();
                $uniqueImageName = time() . rand(99, 9999) . "." . $imageName;
                $image->move(public_path('storage/images'), $uniqueImageName);
                Image::create([
                    "key_id" => $blog->id,
                    "path_name" => $uniqueImageName
                ]);
            }
        }
        return response()->json(["message" => "Blog created", "status" => 201]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $blog = Blog::where("slug", $slug)->with("category:id,title")->first();
        if (is_null($blog)) {
            return response()->json(["message" => "Blog not found", "status" => 404]);
        }
        return response()->json(["blog" => $blog, "status" => 200]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BlogRequest $request, string $id)
    {
        $blog = Blog::find($id);
        if (is_null($blog)) {
            return response()->json(["message" => "Blog not found", "status" => 404]);
        }
        $data = $request->except('_token');
        if (!is_null($request->image)) {
            $image = $request->image;
            $imageName = $image->getClientOriginalExtension();
            $uniqueImageName = time() . rand(99, 9999) . "." . $imageName;
            $image->storeAs('public/images', $uniqueImageName);

            if (file_exists(public_path('storage/images/' . $blog->image))) {
                File::delete(public_path('storage/images/' . $blog->image));
            }

            $data['image'] = $uniqueImageName;
        }
        $slug = Str::slug($data['title']);
        $data['slug'] = $this->slugCheck($slug);
        $blog->update($data);
        return response()->json(["message" => "Blog updated", "status" => 201]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog = Blog::find($id);
        if (is_null($blog)) {
            return response()->json(["message" => "Blog not found", "status" => 404]);
        }
        $this->deleteImagesFromPost($blog->body);
        if (file_exists(public_path('storage/images/' . $blog->image))) {
            File::delete(public_path('storage/images/' . $blog->image));
        }
        $blog->delete();
        return response()->json(["message" => "Blog deleted", "status" => 201]);
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
