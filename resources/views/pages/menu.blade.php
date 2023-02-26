@extends('layouts.master')

@section('favicon')
    <link rel="shortcut icon" href="../images/BK.png" type="image/x-icon">
@endsection

@section('title', 'menu')



@section('content')
@include('layouts.navbar')
    <div class="container mx-auto px-4 min-h-[50vh] mt-14 my-32">
        <p class="menuTitle text-5xl text-slate-900 text-center my-9">Our menu</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {{-- <p>{{$products}}</p> --}}
            @foreach ($products as $product)
                <a href="/shop/{{$product->category_name}}">
                    <div>
                        {{-- <p>{{ $product->name }}</p>
                        <img src="{{ $product->urlPhoto }}" class="max-w-full" alt=""> --}}
                        <div class="box-dish border-2 rounded-3xl   ">
                            <div class="flex gap-14 items-center overflow-hidden h-full border-[10px] rounded-3xl border-white bg-orange-50 duration-200 hover:bg-[#ffede0]">
                                <img src="{{ $product->images }}" class="w-[50%] h-[8em] object-cover" alt="">
                                <div class="description w-full">
                                    <p class="font-bold text-lg">{{ $product->category_name }}</p>
                                </div>
                                {{-- <i class="las la-shopping-basket bg-yellow-400 text-3xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer hover:text-white place-self-end"></i> --}}
                            </div>
                        </div>
                    </div>
                </a>
            @endforeach
        </div>
    </div>
@endsection
