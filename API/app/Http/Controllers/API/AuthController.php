<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
            $validator = Validator::make($request->all(), [
                'username'=>'required',
                'email'=>'required|email|max:191|unique:users,email',
                'password'=>'required|min:6',
                'adress' =>'required',
                'gender'=>'required'
            ]);

            if($validator->fails()){
                return response()->json([
                    'validation_errors'=>$validator->messages(),
                ]);
            }
            else{
                $user = User::create([
                    'name'=>$request->username,
                    'email'=>$request->email,
                    'password'=>Hash::make($request->password),
                    'adress'=>$request->adress,
                    'gender'=>$request->gender
                ]);

            $token = $user->createToken($user->email.'_Token')->plainTextToken;
            
            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'adress'=>$user->adress,
                'gender'=>$user->gender,
                'message'=>'Registered Successfully',
            ]);
        }
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email'=>'required|max:191',
            'password'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);

        } else {
            $user = User::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status'=>401,
                    'message'=>'Invalid credentials',
                ]);
            }
            else {
                $token = $user->createToken($user->email.'_Token')->plainTextToken;
            
            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Logged In Successfully',
            ]);
            }
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Logged out Successfully',
        ]);
    }
}
