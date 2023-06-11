<?php

namespace App\Listeners;

use App\Events\UserAction;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;

class deletingUser
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\UserAction  $event
     * @return void
     */
    public function handle(UserAction $event, Request $request)
    {
        $current_timestamp = Carbon::now()->toDateTimeString();
        $user = $event->user;
        $saveUser = DB::table('user_action')->insert([
            'name' => $user->name,
            'email' => $user->email,
            'admin name' => auth()->user()->name,
            'action' => 'Delete',
            'created_at' => $current_timestamp,
            'updated_at' => $current_timestamp
        ]);
        return $saveUser;
    }
}
