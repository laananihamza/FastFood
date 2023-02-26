<?php

use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', [StoreController::class, "index"])->name('home');
// Route::get('/shop', [StoreController::class, "show"])->name('shop');
// Route::get('/menu', [StoreController::class, 'menu'])->name('menu');
Auth::routes();
Route::controller(StoreController::class)->group(function () {
    Route::get('/',  "index")->name('home');
    Route::get('/shop',  "show")->name('shop')->middleware('auth');
    Route::post('/shop',  "changeShop");
    Route::get('/menu',  'menu')->name('menu')->middleware('auth');
    Route::get('/filterDishes/{name}',  'filterDishes');
});
Route::get('/blog', function () {
    return view('pages.blog');
})->name('blog');
Route::get('/about', function () {
    return view('pages.about');
})->name('about');
Route::get('/contact', function () {
    return view('pages.contact');
})->name('contact');



// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
