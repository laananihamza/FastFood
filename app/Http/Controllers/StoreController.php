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
        return redirect('/');
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
        $price = $request->input('price', 0);
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
            ])->get();
        } else {
            $products = DB::table("products")->get();
        }

        // $products = DB::table("pizza")->join('category', 'pizza.category_code', '=', 'category.id')->get();
        return Response()->json($products);
    }

    public function Home(Request $request)
    {
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('category.category_name', '=', 'Pizza')->where('products.size', '=', 'S')->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price')->get();
        $user = $request->user();
        return Inertia::render('Home', ['products' => $products, 'user' => $user]);
    }

    public function Shop(Request $request)
    {
        $products = DB::table("products")->where('size', '=', 'S')->paginate(8);
        $countProducts = DB::table("products")->count();
        $maxPrice = DB::table("products")->get()->max('price');
        return Inertia::render('shop', ['user' => $request->user(), 'products' => $products, 'maxPrice' => $maxPrice, 'countProducts' => $countProducts]);
    }
    public function getDashies(Request $request)
    {
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('category_name', '=', $request->name)->where('size', '=', 'S')->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'products.ingredients')->get();
        // return inertia('Home', ['products' => $products]);

        // return inertia('test', ['products' => $products]);
        return response()->json(['products', $products]);
        // return $products;
    }
    public function getProduct(Request $request, $id = 4)
    {
        $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('products.id', '=', $id)->select('products.id', 'products.category_code', 'products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'category.category_name', 'products.ingredients')->get();
        $same_category_products =  DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('size', '=', 'S')->where('products.category_code', '=', $products[0]->category_code)->select('products.id', 'products.id', 'products.name', 'products.urlPhoto',  'products.price')->orderByDesc('products.Nbr_ordred')->get();
        $size_product = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->where('products.name', '=', $products[0]->name)->select('products.id', 'products.category_code', 'products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'category.category_name', 'products.ingredients')->get();
        return Inertia::render("product", ['products' => $products, 'category' => $same_category_products, 'size' => $size_product]);
    }
}
