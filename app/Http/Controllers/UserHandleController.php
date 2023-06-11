<?php

namespace App\Http\Controllers;

use App\Events\UserAction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserHandleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = DB::table('users')->where('name', 'Like', "%" . $request->search . "%")->paginate(6)->appends('search', $request->search);
        return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users, 'searchParam' => $request->search]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/users/HandleUser', ['user' => auth()->user()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'role' => ['string']
        ]);
        $user = User::create([
            'name' => $request->input('firstname') . ' ' . $request->input('lastname'),
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role' => $request->input('role')
        ]);
        return to_route('users.index');
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
        // $users = DB::table('users')->where('id', '=', $id)->get();
        $users = User::find($id);
        return Inertia::render('Admin/users/HandleUser', ['user' => auth()->user(), 'users' => $users]);
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
        $data = $request->validate([
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => [],
            'role' => ['string']
        ]);
        if ($request->input('password')) {

            DB::table('users')->where('id', '=', $id)->update([
                'name' => $request->input('firstname') . ' ' . $request->input('lastname'),
                'firstname' => $request->input('firstname'),
                'lastname' => $request->input('lastname'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'role' => $request->input('role')
            ]);
        } else {
            DB::table('users')->where('id', '=', $id)->update([
                'name' => $request->input('firstname') . ' ' . $request->input('lastname'),
                'firstname' => $request->input('firstname'),
                'lastname' => $request->input('lastname'),
                'email' => $request->input('email'),
                'role' => $request->input('role')
            ]);
        }
        return to_route('users.index')->appends('search', $request->search);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = User::find($id);
        event(new UserAction($user));
        return event(new UserAction($user));
        // User::find($id)->delete();
        // return redirect()->back();
    }

    public function unblockUser(Request $request)
    {
        $user = DB::table('users')->where('id', '=', $request->userID)->update(['blocked' => false]);
        return redirect()->back();
        // $users = DB::table('users')->paginate(6)->appends('search', $request->search);
        // return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }
    public function blockUser(Request $request)
    {
        $user = DB::table('users')->where('id', '=', $request->userID)->update(['blocked' => true]);
        return redirect()->back();
        // $users = DB::table('users')->paginate(6)->appends('search', $request->search);
        // return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }
    public function makeUserAdmin(Request $request)
    {
        $user = DB::table('users')->where('id', '=', $request->userID)->update(['issuperuser' => true]);
        // $users = DB::table('users')->paginate(6)->appends('search', $request->search);
        return redirect()->back();
        // return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }
    public function DismissUserFromAdmin(Request $request)
    {
        $user = DB::table('users')->where('id', '=', $request->userID)->update(['issuperuser' => false]);
        return redirect()->back();
        // $users = DB::table('users')->paginate(6)->appends('search', $request->search);
        // return Inertia::render('Admin/users/usersmanagment', ['user' => auth()->user(), 'users' => $users]);
    }
}
