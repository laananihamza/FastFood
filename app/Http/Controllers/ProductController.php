<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = DB::table("products")
            ->join('category', 'products.category_code', '=', 'category.id')
            // ->when($request->search, function ($query, $search) {
            //     $query->where('products.name', 'Like', "%" . $search . "%");
            // })

            ->where('products.name', 'Like', "%" . $request->search . "%")
            ->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'products.stock', 'products.ingredients', 'category_name')
            ->paginate(6)->appends('search', $request->search);
        // $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'products.ingredients', 'category_name')->paginate(6);
        return Inertia::render('Admin/products/products-items', [
            'user' => auth()->user(),
            'products' => $products,
            'searchParam' => $request->search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category = DB::table('category')->select('id', 'category_name')->get();
        return Inertia::render('Admin/products/HandleProduct', ['user' => auth()->user(), 'category' => $category]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:70'],
            'size' => ['required', 'string', 'max:2'],
            'urlPhoto' => "required|image|mimes:png,jpg,jpeg|max:2048",
            'stock' => ['required', 'numeric', 'gte:1'],
            'price' => ['required', 'numeric', 'gte:10'],
            'ingredients' => ['required', 'string', 'max:500'],
            'description' => ['required', 'string', 'max:1000'],
            'category_code' => ['required', 'numeric', 'gt:0'],
        ]);

        /* To Generate unique name for image */
        $imgName = time() . '.' . $request->urlPhoto->extension();
        /* To move image to public image folder */
        $request->urlPhoto->move(public_path('images'), $imgName);

        DB::table('products')->insert([
            'name' => $request->input('name'),
            'size' => $request->input('size'),
            'urlPhoto' => 'images/' . $imgName,
            'stock' =>  $request->input('stock'),
            'price' =>  $request->input('price'),
            'ingredients' => $request->input('ingredients'),
            'description' => $request->input('description'),
            'category_code' =>  $request->input('category_code'),
        ]);
        return to_route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(products $products, $product)
    {
        $category = DB::table('category')->select('id', 'category_name')->get();
        $product = $products->where('id', '=', $product)->get();
        return Inertia::render('Admin/products/HandleProduct', ['user' => auth()->user(), 'category' => $category, 'product' =>  $product[0]]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, products $products, $product)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:70'],
            'size' => ['required', 'string', 'max:2'],
            'urlPhoto' => "required|image|mimes:png,jpg,jpeg|max:2048",
            'stock' => ['required', 'numeric', 'gte:1'],
            'price' => ['required', 'numeric', 'gte:10'],
            'ingredients' => ['required', 'string', 'max:500'],
            'description' => ['required', 'string', 'max:1000'],
            'category_code' => ['required', 'numeric', 'gt:0'],
        ]);
        /* To Generate unique name for image */
        $imgName = time() . '.' . $request->urlPhoto->extension();
        /* To move image to public image folder */
        $request->urlPhoto->move(public_path('images'), $imgName);

        $product = DB::table('products')->where('id', '=', $product)->update([
            'name' => $request->input('name'),
            'size' => $request->input('size'),
            'urlPhoto' => 'images/' . $imgName,
            'stock' =>  $request->input('stock'),
            'price' =>  $request->input('price'),
            'ingredients' => $request->input('ingredients'),
            'description' => $request->input('description'),
            'category_code' =>  $request->input('category_code'),
        ]);
        return to_route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(products $products, $product)
    {
        DB::table('products')->where('id', '=', $product)->delete();
        return redirect()->back();
    }
    public function searchProducts(Request $request)
    {
        $products = DB::table("products")
            ->join('category', 'products.category_code', '=', 'category.id')
            ->when($request->search, function ($query, $search) {
                $query->where('products.name', 'Like', "%" . $search . "%");
            })
            ->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'products.ingredients', 'category_name')
            ->paginate(6);
        return response()->json([
            'products' => $products,
            'searchParam' => $request->search
        ]);

        return Inertia::render('Admin/products/products-items', ['user' => auth()->user(), 'products' => $products]);
    }
}
