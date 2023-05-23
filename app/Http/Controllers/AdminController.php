<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return redirect('/me-admin/dashboard');
    }
    public function Dashboard(Request $request)
    {
        return Inertia::render('Admin/Dashboard', ['user' => auth()->user()]);
    }
}
