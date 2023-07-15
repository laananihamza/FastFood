<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class verificationEmailController extends Controller
{
    public function notice(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return to_route('home');
        }
        return Inertia::render('Auth/Email/verify-email', ['email' => auth()->user()->email]);
    }
    public function noticeSended(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return to_route('home');
        }
        return Inertia::render('Auth/Email/send-email');
    }
    public function verify(EmailVerificationRequest $request)
    {

        $request->fulfill();

        return redirect('/home');
    }
    public function send(Request $request)
    {

        $request->user()->sendEmailVerificationNotification();

        return redirect()->route('verification.noticeSended');
    }
}
