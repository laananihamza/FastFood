<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\cartController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserHandleController;
use App\Http\Controllers\verificationEmailController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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

/*
|
|
| Main Routes
|
|
*/

// Route::get('/', [StoreController::class, "index"])->name('home');
// Route::get('/menu', [StoreController::class, 'menu'])->name('menu');
Route::get('/', [StoreController::class, 'Home'])->name('home');
Route::post('/', [StoreController::class, 'getDashies']);
// Route::post('/products/{category?}', [StoreController::class, "Shop"]);
Route::post('/products/{min?}/{max?}/{category?}', [StoreController::class, "Shop"])->name('filtershop');
Route::get('/products/{min?}/{max?}/{category?}', [StoreController::class, "Shop"])->name('shop');
Route::get('/product/{category}/{id}', [StoreController::class, "getProduct"]);
// Route::post('/home', [StoreController::class, 'getDashies']);
// Route::get('/home', [StoreController::class, 'Home'])->name('home');

// Route::post('/test/', [StoreController::class, 'getDashies']);
Route::get('/test', function () {
    return Inertia::render('test');
})->name('test')->middleware(['auth', 'verified']);

/*
|
|
| Cart Routes
|
|
*/

Route::post('/add-to-cart', [cartController::class, 'addToCart']);
Route::get('/get-cart-items', [cartController::class, 'getCartItems'])->name('cartItems');
Route::put('/update-cart', [cartController::class, 'updateCartItem'])->name('updateCart');
Route::delete('/delete-cart/{product_id}', [cartController::class, 'DeleteCartItem'])->name('deleteItem');
Route::delete('/clear-cart/{cart_id}', [cartController::class, 'clearCart'])->name('clearCart');
Route::get('/cart', [cartController::class, 'goToCart'])->name('goToCart');
Route::get('/checkout', [cartController::class, 'checkout'])->name('checkout');

/*
|
|
| Auth Routes
|
|
*/

Auth::routes();
Route::get('/singout', [RegisterController::class, 'create'])->name('register');
Route::post('/singout', [RegisterController::class, 'store'])->name('createUser');
Route::get('/login', [LoginController::class, 'create'])->middleware('guest')->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth')->name('logout');

Route::resource('/profile', UserController::class)->middleware('auth');

/*
|
|* Google Auth
|
*/

Route::get('auth/google', [GoogleController::class, 'signInwithGoogle'])->name('google.auth');
Route::get('auth/google/callback', [GoogleController::class, 'callbackToGoogle']);

/*
|
|* Verify Email
|
*/
Route::group([
    'controller' => verificationEmailController::class,
    'middleware' => 'auth',
], function () {
    Route::get('/email/verify', 'notice')->name('verification.notice');
    Route::get('/email/verify/{id}/{hash}', 'verify')->middleware('signed')->name('verification.verify');
    Route::post('/email/verification-notification', 'send')->middleware('throttle:6,1')->name('verification.send');
    Route::get('/email/verify/send-notice', 'noticeSended')->name('verification.noticeSended');
});
/*
|
|* Reset password
|
*/
Route::group([
    'controller' => ResetPasswordController::class,
    'middleware' => 'guest',
], function () {
    Route::get('/forgot-password', 'index')->name('password.request');
    Route::post('/forgot-password', 'sendNotification')->name('password.email');
    Route::get('/password/reset/{token}', 'resetForm')->name('password.reset');
    Route::post('/reset-password', 'update')->name('password.update');
});


/*
* 
* Admin Routes
*
*/

Route::group([
    'prefix' => '/me-admin',
    'controller' => AdminController::class,
    'middleware' => ['auth', 'admin']
], function () {
    Route::get('/', 'index');
    Route::get('/dashboard', 'Dashboard')->name('dashboard');
    Route::resource('products', ProductController::class);
    Route::resource('users', UserHandleController::class);
    Route::post('/users/unblock', [UserHandleController::class, 'unblockUser'])->name('unblockUser');
    Route::post('/users/block', [UserHandleController::class, 'blockUser'])->name('blockUser');
    Route::post('/users/admin', [UserHandleController::class, 'makeUserAdmin'])->name('makeUserAdmin');
    Route::post('/users/unadmin', [UserHandleController::class, 'DismissUserFromAdmin'])->name('DismissUserFromAdmin');
});
// Route::get('/me-admin/products/t', function (Request $request) {
//     $products = DB::table("products")
//         ->join('category', 'products.category_code', '=', 'category.id')
//         // ->when($request->search, function ($query, $search) {
//         //     $query->where('products.name', 'Like', "%" . $search . "%");
//         // })

//         ->where('products.name', 'Like', "%" . $request->search . "%")

//         ->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'products.ingredients', 'category_name')
//         ->withQueryString('df')
//         ->paginate(6);
//     // $products = DB::table("products")->join('category', 'products.category_code', '=', 'category.id')->select('products.size', 'products.id', 'products.name', 'products.urlPhoto', 'products.description', 'products.price', 'products.ingredients', 'category_name')->paginate(6);
//     return Inertia::render('Admin/products/products-items', [
//         'user' => auth()->user(),
//         'products' => $products,
//         'searchParam' => $request->search
//     ]);
// })->middleware(['admin']);

/*
|
|
* Handle Products
|
|
*/




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


// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// require __DIR__ . '/auth.php';

Route::fallback(fn () => Inertia::render('404'));
