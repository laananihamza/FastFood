<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItems;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;

class cartController extends Controller
{
    public function addToCart(Request $request)
    {
        if (!Auth::user()) {
            if (!session('cart_id')) {
                $cart = Cart::create([]);
                session(['cart_id' => $cart->id]);
            }
            $cart = Cart::find(session()->get('cart_id'));
            $cart_items = CartItems::where('cart_id', $cart->id)->where('product_id', $request->product_id)->get();
            if (count($cart_items) !== 0) {
                DB::table('cart_items')->where('cart_id', '=', $cart->id)->where('product_id', '=', $request->product_id)->update(['quantity' => $cart_items[0]->quantity + 1]);
            } else {
                DB::table('cart_items')->insert(['cart_id' => $cart->id, 'product_id' => $request->product_id, 'quantity' => $request->quantity, 'created_at' => new DateTime(), 'updated_at' => new DateTime()]);
            }

            // return response()->json($cart_items);
        } else {

            $cart = DB::table('carts')->where('user_id', $request->user()['id'])->first();
            $cart_items = DB::table('cart_items')->where('cart_id', '=', $cart->id)->where('product_id', '=', $request->product_id)->get();
            // return response()->json($cart_items);
            if (count($cart_items) !== 0) {
                DB::table('cart_items')->where('cart_id', '=', $cart->id)->where('product_id', '=', $request->product_id)->update(['quantity' => $cart_items[0]->quantity + 1]);
            } else {
                if (!$cart) {

                    $cart = Cart::create(['user_id' => $request->user()['id']]);
                }
                DB::table('cart_items')->insert(['cart_id' => $cart->id, 'product_id' => $request->product_id, 'quantity' => $request->quantity, 'created_at' => new DateTime(), 'updated_at' => new DateTime()]);
            }
        }
    }

    public function getCartItems(Request $request)
    {
        if (!$request->user()) {
            $cart = DB::table('carts')
                ->find(session()->get('cart_id'));
            $product_list = DB::table('products')->join('cart_items', 'cart_items.product_id', '=', 'products.id')->where('cart_id', '=', $cart->id ?? null)->get(); // join with cart_items

            // return $cart;
        } else {
            if (session()->has('cart_id')) {
                $cart = DB::table('carts')
                    ->where('user_id', $request->user()['id'])->first();

                Cart::find(session()->get('cart_id'))->update(['user_id' => auth()->user()->id, 'updated_at' => new DateTime()]);
                CartItems::where('cart_id', session()->get('cart_id'))->update(['cart_id' => $cart->id, 'updated_at' => new DateTime()]);
                $product_list = DB::table('products')
                    ->join('cart_items', 'cart_items.product_id', '=', 'products.id')
                    ->where('cart_id', '=',  $cart->id ?? null)
                    ->get();
            } else {
                $cart = DB::table('carts')
                    ->where('user_id', $request->user()['id'])->first();
                $product_list = DB::table('products')->join('cart_items', 'cart_items.product_id', '=', 'products.id')->where('cart_id', '=',  $cart->id ?? null)->get(); // join with cart_items
            }
        }
        // $cart_items = DB::table('cart_items')->where('cart_id', '=', $cart[0]->id)->get();
        return response()->json($product_list);
    }
    public function updateCartItem(Request $request)
    {
        if (!Auth::user()) {
            $cart = Cart::find(session()->get('cart_id'));
        } else {
            $cart = DB::table('carts')->where('user_id', $request->user()['id'])->first();
        }


        DB::table('cart_items')->where('cart_id', '=', $cart->id)->where('product_id', '=', $request->product_id)->update(['quantity' => $request->quantity]);
        $cart_items = CartItems::where('cart_id', "=", $cart->id)->where('product_id', '=', $request->product_id)->first();
        if ($cart_items->quantity < 1) {
            DB::table('cart_items')->where('cart_id', "=", $cart->id)->where('product_id', '=', $request->product_id)->delete();
        }
    }
    public function DeleteCartItem(Request $request, $product_id)
    {
        if (!Auth::user()) {
            $cart = Cart::find(session()->get('cart_id'));
        } else {
            $cart = DB::table('carts')->where('user_id', $request->user()['id'])->first();
        }
        $cart_items = CartItems::where('cart_id', "=", $cart->id)->where('product_id', '=', $product_id)->get();
        DB::table('cart_items')->where('cart_id', "=", $cart->id)->where('product_id', '=', $product_id)->delete();
    }
    public function clearCart(Request $request)
    {
        if (!Auth::user()) {
            $cart = Cart::find(session()->get('cart_id'));
        } else {
            $cart = DB::table('carts')->where('user_id', $request->user()['id'])->first();
        }
        // $cart_items = CartItems::where('cart_id', "=", $cart->id)->get();
        DB::table('cart_items')->where('cart_id', "=", $cart->id)->delete();
    }
    public function goToCart()
    {
        return Inertia::render('Cart/GoToCart', ['user' => auth()->user()]);
    }
    public function checkout()
    {
        return Inertia::render('Cart/Checkout', ['user' => auth()->user()]);
    }
}
