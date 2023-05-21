<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItems;
use DateTime;
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
            $cart = DB::table('carts')->where('id', '=', session()->get('cart_id'))->get();
            DB::table('cart_items')->insert(['cart_id' => $cart[0]->id, 'product_id' => $request->product_id, 'quantity' => $request->quantity, 'created_at' => new DateTime(), 'updated_at' => new DateTime()]);
        } else {
            $cart = DB::table('carts')->where('user_id', '=', $request->user()['id'])->get();

            if (count($cart) === 0) {
                DB::table('carts')->insert(['user_id' => $request->user()['id']]);
            }
            DB::table('cart_items')->insert(['cart_id' => $cart[0]->id, 'product_id' => $request->product_id, 'quantity' => $request->quantity, 'created_at' => new DateTime(), 'updated_at' => new DateTime()]);
        }
    }

    public function getCartItems(Request $request)
    {
        if (!$request->user()) {
            $cart = DB::table('carts')
                ->where('id', '=', session()->get('cart_id'))
                ->get();
        } else {
            $cart = DB::table('carts')
                ->where('user_id', '=', $request->user()['id'])
                ->get();
        }
        // $cart_items = DB::table('cart_items')->where('cart_id', '=', $cart[0]->id)->get();
        $product_list = DB::table('products')->join('cart_items', 'cart_items.product_id', '=', 'products.id')->where('cart_id', '=', $cart[0]->id)->get(); // join with cart_items
        return response()->json([$product_list]);
    }
}
