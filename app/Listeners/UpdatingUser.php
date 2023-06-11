<?php

namespace App\Listeners;

use App\Events\UserAction;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdatingUser
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
    public function handle(UserAction $event)
    {
        //
    }
}
