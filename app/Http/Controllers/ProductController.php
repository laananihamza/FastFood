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
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category = DB::table('category')->select('id', 'category_name')->get();
        return Inertia::render('Admin/products/AddProduct', ['user' => auth()->user(), 'category' => $category]);
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
            'urlPhoto' => ['required', 'string', 'max:255'],
            'stock' => ['required', 'numeric', 'gte:1'],
            'price' => ['required', 'numeric', 'gte:10'],
            'ingredients' => ['required', 'string', 'max:500'],
            'description' => ['required', 'string', 'max:1000'],
            'category_code' => ['required', 'numeric', 'gt:0'],
        ]);
        DB::table('products')->insert([
            'name' => $request->input('name'),
            'size' => $request->input('size'),
            'urlPhoto' => $request->input('urlPhoto'),
            'stock' =>  $request->input('stock'),
            'price' =>  $request->input('price'),
            'ingredients' => $request->input('ingredients'),
            'description' => $request->input('description'),
            'category_code' =>  $request->input('category_code'),
        ]);
        return to_route('shop');
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
        return Inertia::render('Admin/products/AddProduct', ['user' => auth()->user(), 'category' => $category, 'product' =>  $product[0]->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(products $products)
    {
        //
    }
}
