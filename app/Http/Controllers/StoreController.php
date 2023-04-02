<?php

namespace App\Http\Controllers;

use App\Models\burger;
use App\Models\category;
use App\Models\pasta;
use App\Models\pizza;
use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function index()
    {

        $pizzas = DB::table("pizza")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
            // ->distinct()
            ->where('size', '=', 'S')
            ->limit(8)
            ->get();
        $burger = DB::table("burger")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
            // ->distinct('name', 'urlPhoto')
            ->where('size', '=', 'S')
            ->limit(8)
            ->get();
        $pasta = DB::table("pasta")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
            // ->distinct('name', 'urlPhoto')
            ->limit(8)
            ->get();
        $tacos = DB::table("tacos")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
            // ->distinct('name', 'urlPhoto')
            ->limit(8)
            ->get();
        $drinks = DB::table("drinks")->select('name', 'urlPhoto', 'price', 'ingredients', 'description', 'type')
            // ->distinct('name', 'urlPhoto')
            ->limit(8)
            ->get();
        return redirect('/home');
        // return view('pages.home', ['pizzas' => $pizzas, 'burger' => $burger, 'pasta' => $pasta, 'tacos' => $tacos, 'drinks' => $drinks]);
    }
    public function filterDishes($name)
    {
        // switch ($name):
        //     case "pizza":
        //         $pizzas = DB::table("pizza")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
        //             ->where('size', '=', 'S')
        //             ->limit(8)
        //             ->get();
        //         return response()->json($pizzas);
        //     case "pasta":
        //         $pasta = DB::table("pasta")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
        //             ->limit(8)
        //             ->get();
        //         return response()->json($pasta);
        //     case "burger":
        //         $burger = DB::table("burger")->select('name', 'urlPhoto', 'price', 'ingredients', 'description')
        //             ->where('size', '=', 'S')
        //             ->limit(8)
        //             ->get();
        //         return response()->json($burger);
        //     case "drink":
        //         $drinks = DB::table("drinks")->select('name', 'urlPhoto', 'price', 'ingredients', 'description', 'type')
        //             ->limit(8)
        //             ->get();
        //         return response()->json($drinks);

        // endswitch;
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('category_name', '=', $name)->where('size', '=', 'S')->get();
        // return response()->json(['pizza' => $pizzas, 'burger' => $burger, 'pasta' => $pasta, 'tacos' => $tacos, 'drink' => $drinks]);
        // return view('home', ['pizzas' => $pizzas, 'burger' => $burger, 'pasta' => $pasta, 'tacos' => $tacos, 'drinks' => $drinks]);
    }
    public function show(Request $request)
    {
        // $products = DB::table(DB::raw('pizza, pasta, burger, drinks'))->limit(12);
        if ($request->has('page')) {
            $page = $request->input('page');
        } else {
            $page = 1;
        }
        // $products = DB::table("pizza")->union(DB::table("burger"))->forPage($page, 12)->get();
        $countProducts = DB::table("pizza")->union(DB::table("burger"))->count();
        $maxPrice = DB::table("pizza")->union(DB::table("burger"))->get()->max('price');
        $products = DB::table("products")->forPage($page, 12)->get();

        // ?!!! $products = DB::table("pizza")->where('size', '=', 'S')->union(DB::table("burger")->where('size', '=', 'S'))->forPage($page, 12)->get();
        // return view('pages.shop', ['All_products' => $products, "countColumn" => $countColumn]);
        return view('pages.shop', ['products' => $products, 'maxPrice' => $maxPrice, 'page' => $page, "countProducts" => ceil($countProducts / 12)]);
    }
    public function menu()
    {
        // $products = DB::table("products")->limit(12);
        $products = DB::table("category")->select('category_name', 'images')->get();
        // $products = DB::table("pizza")->select('name', 'urlPhoto')->distinct('name')->union(DB::table("burger")->select('name', 'urlPhoto')->distinct('name'))->get();
        // $products += DB::table("burger")->get();
        // $products += DB::table("pasta")->get();

        // $countColumn = DB::table("products")->count();

        // $products = products::all();
        return view('pages.menu', ['products' => $products]);
    }
    public function changeShop(Request $request)
    {

        // $price = $request->input('priceProduct', 0);
        $price = $request->input('price');
        if ($request->has('page')) {
            $page = $request->input('page');
        } else {
            $page = 1;
        }
        // $products = (DB::table("pizza")->where('price', '>=', $price)
        //     ->union(DB::table("burger")->where('price', '>=', $price)))->join('category', 'pizza.category_code', '=', 'category.id')->get();
        if ($request->has('categories')) {
            $burger = $request->input('categories.burger', '');
            $pizza = $request->input('categories.pizza', '');
            $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where([
                ['price', '>=', $price],
                ['category_name', '=', $burger]
            ])->orWhere([
                ['price', '>=', $price],
                ['category_name', '=',  $pizza]
            ])->forPage($page, 12)->get();
        } else {
            // $products = DB::table("products")->get();
            $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where([
                ['price', '>=', $price],
            ])->orWhere([
                ['price', '>=', $price],
            ])->forPage($page, 12)->get();
        }

        // $products = DB::table("pizza")->join('category', 'pizza.category_code', '=', 'category.id')->get();
        return Response()->json($products);
    }
    public function Home()
    {
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('category_name', '=', 'Pizza')->where('size', '=', 'S')->get();
        return Inertia::render('Home', ['products' => $products]);
    }
    public function testReact()
    {
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('category_name', '=', 'Pizza')->where('size', '=', 'S')->get();
        return Inertia::render('test', ['products' => $products]);
    }
    public function getDashies(Request $request)
    {
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('category_name', '=', $request->name)->where('size', '=', 'S')->get();

        return inertia('Home', ['products' => $products]);
        return inertia('test', ['products' => $products]);
        // return response()->json(['test', $products]);
        // return $products;
    }

    // public function userCreate()
    // {
    //     return Inertia::render('Auth/Register');
    // }
    // public function Login()
    // {
    //     return Inertia::render('Auth/Login');
    // }
}
