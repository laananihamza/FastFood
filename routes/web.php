<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\UserController;
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
// Route::get('/menu', [StoreController::class, 'menu'])->name('menu');
Route::get('/', [StoreController::class, 'Home'])->name('home');
Route::post('/', [StoreController::class, 'getDashies']);
Route::get('/products', [StoreController::class, "Shop"])->name('shop');
Route::get('/products/{id?}', [StoreController::class, "getProduct"]);
// Route::post('/home', [StoreController::class, 'getDashies']);
// Route::get('/home', [StoreController::class, 'Home'])->name('home');

Route::post('/test/', [StoreController::class, 'getDashies']);
Route::get('/test', [StoreController::class, 'testReact'])->name('test')->middleware('auth');
Auth::routes();
Route::get('/singout', [RegisterController::class, 'create'])->name('register');
Route::post('/singout', [RegisterController::class, 'store'])->name('createUser');
Route::get('/login', [LoginController::class, 'create'])->middleware('guest')->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth')->name('logout');

Route::resource('/profile', UserController::class)->middleware('auth');

// Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
// Route::post('/login', [AuthenticatedSessionController::class, 'store']);
// Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
// Route::post('/user', [AuthController::class, 'store'])->name('user');





Route::controller(StoreController::class)->group(function () {
    Route::get('/home',  "index");
    // Route::get('/shop',  "show")->name('shop');
    // Route::post('/shop',  "changeShop");
    // Route::get('/menu',  'menu')->name('menu');
    // Route::get('/filterDishes/{name}',  'filterDishes');
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


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// require __DIR__ . '/auth.php';
