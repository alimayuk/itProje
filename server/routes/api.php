<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\TestimonialController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/category', [CategoryController::class, "index"]);  
Route::get('/category/{id}', [CategoryController::class, "show"]);
Route::post('/category', [CategoryController::class, "store"]);
Route::post('/category/{id}', [CategoryController::class, "update"]);
Route::delete('/category/{id}', [CategoryController::class, "destroy"]);

Route::get('/blog', [BlogController::class, "index"]);  
Route::get('/blog/{id}', [BlogController::class, "show"]);
Route::post('/blog', [BlogController::class, "store"]);
Route::post('/blog/{id}', [BlogController::class, "update"]);
Route::delete('/blog/{id}', [BlogController::class, "destroy"]);

Route::get('/project', [ProjectController::class, "index"]);  
Route::get('/project/{id}', [ProjectController::class, "show"]);
Route::post('/project', [ProjectController::class, "store"]);
Route::post('/project/{id}', [ProjectController::class, "update"]);
Route::delete('/project/{id}', [ProjectController::class, "destroy"]);


Route::get('/testimonial', [TestimonialController::class, "index"]);  
Route::get('/testimonial/{id}', [TestimonialController::class, "show"]);
Route::post('/testimonial', [TestimonialController::class, "store"]);
Route::post('/testimonial/{id}', [TestimonialController::class, "update"]);
Route::delete('/testimonial/{id}', [TestimonialController::class, "destroy"]);


Route::get('/settings', [SettingsController::class, "index"]);  
Route::get('/settings/{id}', [SettingsController::class, "show"]);
Route::post('/settings', [SettingsController::class, "store"]);
Route::post('/settings/{id}', [SettingsController::class, "update"]);
Route::delete('/settings/{id}', [SettingsController::class, "destroy"]);