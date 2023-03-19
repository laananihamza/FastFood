<?php

use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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
<<<<<<< HEAD
Route::post('/home', [StoreController::class, 'getDashies']);
Route::get('/home', [StoreController::class, 'Home'])->name('home');
=======
Route::post('/test/', [StoreController::class, 'getDashies']);
Route::get('/test', [StoreController::class, 'testReact'])->name('test')->middleware('auth');
>>>>>>> 9cc07f5a5427deb28ebcf60bd5b1aa79a35e954f
Route::get('/shopjs', fn () => Inertia::render('shop'))->name('shopjs');



Auth::routes();
// Route::controller(StoreController::class)->group(function () {
//     Route::get('/',  "index")->name('home');
//     Route::get('/shop',  "show")->name('shop')->middleware('auth');
//     Route::post('/shop',  "changeShop");
//     Route::get('/menu',  'menu')->name('menu')->middleware('auth');
//     Route::get('/filterDishes/{name}',  'filterDishes');
// });
Route::get('/blog', function () {
    return view('pages.blog');
})->name('blog');
Route::get('/about', function () {
    return view('pages.about');
})->name('about');
Route::get('/contact', function () {
    return view('pages.contact');
})->name('contact');


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
