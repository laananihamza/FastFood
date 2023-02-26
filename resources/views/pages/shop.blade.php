@extends('layouts.master')

@section('favicon')
<link rel="shortcut icon" href="../images/BK.png" type="image/x-icon">
@endsection
@section('title', 'Shop')



@section('content')
@include('layouts.navbar')
    <div class="container mx-auto px-4 my-14 md:mb-44">
        <p class="title text-4xl my-5 font-black">Products</p>
        <form action="/shop" name="filter">
            @csrf
            <div class="flex justify-start gap-4 items-center mt-5 mb-10">
                {{-- <div class="filter">
    
                </div> --}}
                <details class="relative" data-filter="type">
                    <summary class="list-none cursor-pointer text-lg">
                        <div class="flex items-center gap-2">
                            <span class="uppercase">PRODUCT TYPE</span>
                            <i class="las la-angle-down "></i>
                        </div>
                    </summary>
                    <div class="flex flex-col justify-start absolute left-0 z-50 bg-slate-100 p-2 w-56">
                        <div><input type="checkbox" class="w-[10%] mr-1" value="burger" name="burger" id="burgerCheck"><label for="burgerCheck">Burgers</label></div>
                        <div><input type="checkbox" class="w-[10%] mr-1" value="pizza" name="pizza" id="pizzaCheck"><label for="pizzaCheck">Pizzas</label></div>
                        <div><input type="checkbox" class="w-[10%] mr-1" value="cold-drink" name="cold-drink" id="coldDrinkCheck"><label for="coldDrinkCheck">Cold Drinks</label></div>
                        <div><input type="checkbox" class="w-[10%] mr-1" value="hot-drink" name="hot-drink" id="hotDrinkCheck"><label for="hotDrinkCheck">Hot Drinks</label></div>
                    </div>
                </details>
                <details class="relative" data-filter="Price">
                    <summary class="list-none cursor-pointer text-lg">
                        <div class="flex items-center gap-2">
                            <span class="uppercase">Price</span>
                            <i class="las la-angle-down"></i>
                        </div>
                    </summary>
                    <div class="absolute z-50 bg-white p-2 w-56">
                        <input type="range" min="0" max={{$maxPrice}} value="0" class="w-full" name="priceProduct"><br>
                        <span id="min"></span>
                        <span id="demo"></span>
                        <span id="max"></span>
                    </div>
                </details>
                <button class="px-8 py-2 w-fit  rounded-lg duration-200 hover:text-white bg-yellow-400 text-xl">Filter</button>
            </div>
        </form>
        <div class="loading w-full flex justify-center items-center">
            <div class="lds-dual-ring"></div>
        </div>
        <div class="shop-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
            @foreach ($products as $product)
                {{-- <div>
                    <p>{{ $pizza->name }}</p>
                    <img src="{{ $pizza->urlPhoto }}" class="max-w-full" alt="">
                </div> --}}
                <div class="box rounded-lg border overflow-hidden p-3">
                    <div class="backward-color w-full relative mx-auto overflow-hidden group"><img src="/{{ $product->urlPhoto }}" class="duration-150 mx-auto rounded-lg object-cover w-10/12 h-64" alt=""></div>
                    <p class="fond-bold text-xl mt-5">{{ $product->name }}</p>
                    <p class="my-2 text-slate-400 h-9 overflow-hidden" title="{{$product->description}}">{{$product->description}}</p>
                    <div class="flex justify-between items-center text-yellow-400 text-3xl font-bold p-2 pt-5"><span class="pricePopular">{{ $product->price }} DH</span><i class="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
                </div>
            @endforeach
        </div>
        
        <div class="pages flex justify-center items-center gap-2 p-2 my-14">
            @for ($i = 1; $i <= $countProducts; $i++)
            @if (isset($_GET['page']))
                @if($_GET['page'] == $i)
                    <a href={{"/shop?page=" . $i}} class=" border-b border-black text-xl duration-150 hover:text-yellow-600">{{$i}}</a>
                @else
                    <a href={{"/shop?page=" . $i}} class=" text-xl duration-150 hover:text-yellow-600">{{$i}}</a>
                @endif
            @else
            @if($i == 1)
                <a href={{"/shop?page=" . $i}} class=" border-b border-black text-xl duration-150 hover:text-yellow-600">{{$i}}</a>
            @else
                <a href={{"/shop?page=" . $i}} class=" text-xl duration-150 hover:text-yellow-600">{{$i}}</a>
            @endif
            @endif
                
                
            @endfor
        </div>
        <div id="test"></div>
    </div>
@endsection

@section('scripts')
    <script type="module">
        $(document).ready(function () {
            $('#min').html($('[name=priceProduct]').attr('min'))
            $('#max').html($('[name=priceProduct]').attr('max'))
            $(this).click(function (e) {
                // if ($('[data-filter=Price]').contains(e.target)) {
                if (!$.contains(document.querySelector('[data-filter=Price]'), e.target)) {
                    $('[data-filter=Price]').removeAttr('open')
                    console.log();
                }
                if (!$.contains(document.querySelector('[data-filter=type]'), e.target)) {
                    $('[data-filter=type]').removeAttr('open')

                }
            })
            $('[name=priceProduct]').change( function(e) {
                $('#demo').html($(this).val())
                })
            $('[name=filter]').submit( function(e) {
                e.preventDefault()
                $(".shop-content").html('');
                console.log($('.loading').addClass('show'));
                // '_token = <?php echo csrf_token() ?>'
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('[name="_token"]').val()
                    }
                });
            $.ajax({
               type:'POST',
               url:'/shop',
               
               data:    {
                price: $('[name=priceProduct]').val(),
                categories : {
                    burger: $('[name=burger]:checked').val(),
                    pizza: $('[name=pizza]:checked').val(),
                }
               },
               dataType: 'json',
               success:function(data) {
                console.log(data);
                $('.loading').removeClass('show')
                let content = ''
                for (let i = 0; i < data.length; i++) {
                    content += `<div class="box rounded-lg border overflow-hidden p-3">
                    <div class="backward-color w-full relative mx-auto overflow-hidden group"><img src="/${data[i].urlPhoto}" class="duration-150 mx-auto rounded-lg object-cover w-10/12 h-64" alt=""></div>
                    <p class="fond-bold text-xl mt-5"> ${data[i].name}</p>
                    <p class="my-2 text-slate-400 h-9 overflow-hidden" title="${data[i].description}">${data[i].description}</p>
                    <div class="flex justify-between items-center text-yellow-400 text-3xl font-bold p-2 pt-5"><span class="pricePopular">${data[i].price} DH</span><i class="las la-shopping-basket bg-yellow-400 text-2xl mr-2 mb-2 p-1 rounded-lg duration-200 cursor-pointer text-black hover:text-white place-self-end"></i></div>
                 </div>`;
                    
                }
                $(".shop-content").html(content)
            
               }
            });
        })
        });

    </script>
@endsection
