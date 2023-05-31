<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserHandleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('users')->paginate(6);
        return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function unblockUser(Request $request)
    {
        $user = DB::table('users')->where('id', '=', $request->userID)->update(['blocked' => false]);
        $users = DB::table('users')->paginate(6);
        return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }
    public function blockUser(Request $request)
    {
        $user = DB::table('users')->where('id', '=', $request->userID)->update(['blocked' => true]);
        $users = DB::table('users')->paginate(6);
        return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }
}
