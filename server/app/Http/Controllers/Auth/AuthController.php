<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        try {
            $data = $request->validated();
            User::create([
                "name" => $data["name"],
                "email" => $data["email"],
                "password" => bcrypt($data["password"])
            ]);
            $response = [
                'success' => true,
                'message' => "Registration successful."
            ];
            return response()->json($response, 201);
        } catch (\Throwable $th) {
            $response = [
                'success' => false,
                'message' => "error while registering"
            ];
            return response()->json($response, 400);
        }
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }
        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken("token")->plainTextToken;


        return response()->json([
            'success' => true,
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'name' => $user->name,
            ],
            'access_token' => $token,
            'message' => 'Login successful',
        ], Response::HTTP_OK);
    }
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response("", 204);
    }

    public function me($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(["message" => "User not found", "status" => 404]);
        }
        return response()->json(["user" => $user, "status" => 200]);
    }
}
