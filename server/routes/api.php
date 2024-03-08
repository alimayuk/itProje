<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\EditController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post("/logout", [AuthController::class, "logout"]);


    Route::get('/valid', function () {
        return response()->json(['valid' => auth()->check()]);
    });

    Route::post('/testimonial', [TestimonialController::class, "store"]);

    Route::get("/find", function () {
        $id = auth()->id();
        return response()->json(["id" => $id, "status" => 201]);
    });
});

Route::get('/category', [CategoryController::class, "index"]);
Route::get('/category/{slug}', [CategoryController::class, "show"]);
Route::post('/category', [CategoryController::class, "store"]);
Route::post('/category/{id}', [CategoryController::class, "update"]);
Route::delete('/category/{id}', [CategoryController::class, "destroy"]);

Route::get('/blog', [BlogController::class, "index"]);
Route::get('/blog/{slug}', [BlogController::class, "show"]);
Route::post('/blog', [BlogController::class, "store"]);
Route::post('/blog/{id}', [BlogController::class, "update"]);
Route::delete('/blog/{id}', [BlogController::class, "destroy"]);
Route::post("/editor/image", [EditController::class, "storeimage"]);

Route::get('/project', [ProjectController::class, "index"]);
Route::get('/project/{slug}', [ProjectController::class, "show"]);
Route::post('/project', [ProjectController::class, "store"]);
Route::post('/project/{id}', [ProjectController::class, "update"]);
Route::delete('/project/{id}', [ProjectController::class, "destroy"]);

Route::get('/testimonial', [TestimonialController::class, "index"]);
Route::get('/testimonial/{id}', [TestimonialController::class, "show"]);

Route::post('/testimonial/{id}', [TestimonialController::class, "update"]);
Route::delete('/testimonial/{id}', [TestimonialController::class, "destroy"]);


Route::get('/settings', [SettingsController::class, "index"]);
Route::get('/settings/{id}', [SettingsController::class, "show"]);
Route::post('/settings', [SettingsController::class, "store"]);
Route::post('/settings/{id}', [SettingsController::class, "update"]);
Route::delete('/settings/{id}', [SettingsController::class, "destroy"]);


Route::post("/signup", [AuthController::class, "signup"]);
Route::post("/login", [AuthController::class, "login"]);
Route::get("/me/{id}", [AuthController::class, "me"]);

Route::get("/client",[FrontController::class, "index"]);
Route::get("/client/settings",[FrontController::class, "settings"]);
Route::get("/client/blog/{slug}",[FrontController::class, "blog"]);
Route::get("/client/project/{slug}",[FrontController::class, "project"]);
