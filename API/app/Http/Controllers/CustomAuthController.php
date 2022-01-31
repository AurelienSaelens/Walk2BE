<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Hash;
use Session;

class CustomAuthController extends Controller
{
    public function login(){
        return view("auth/login");
    }

    public function register(){
        return view("auth/register");
    }

    public function registerUser(Request $request){
        $request->validate([
            'lastname'=>'required',
            'firstname'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:5|max:12'
        ]);
        $user = new User();
        $user -> lastname = $request->lastname;
        $user -> firstname = $request->firstname;
        $user -> email = $request->email;
        $user -> password = Hash::make($request->password);
        $res = $user->save();
        
        return response()->json([
            'status' => 200,
            'message' => 'Student Added Successfully',
        ]);
    }

    public function loginUser(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required|min:5|max:12'
        ]);
        $user = User::where('email','=',$request->email)->first();
        if($user) {
            if(Hash::check($request->password,$user->password)){
                $request->session()->put('loginId', $user->id);
                return redirect('dashboard');
            } else {
                return back()->with('fail','Wrong password!');
            }
        } else {
            return back()->with('fail','This email is not registered');
        }
    }
    
    public function dashboard (){

        $data = array();
        if(Session::has('loginId')){
            $data = User::where('id','=', Session::get('loginId'))->first();
        }
        return view ('dashboard', compact('data'));
    }

    public function logout(){
        if(Session::has('loginId')){
            Session::pull('loginId');
            return redirect('login');
        }
    }
}
