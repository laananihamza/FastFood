<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class cartController extends Controller
{
    public function addToCart(Request $request)
    {
        if (!Auth::user()) {
            if (!session('cart_id')) {
                $cart = Cart::create([]);
                session(['cart_id' => $cart->id]);
            }
        } else {
            $cart = DB::table('carts')->where('user_id', '=', $request->user()['id'])->get();

            if (count($cart) === 0) {
                DB::table('carts')->insert(['user_id' => $request->user()['id']]);
            }
        }

        return $request->product_id;
    }
}
