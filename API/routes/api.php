<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::namespace('App\Http\Controllers\Api')->group(function(){

    /**
     * Grupo de insert ou get Token
     *
     */
    Route::group([

        'middleware' => 'api',
        'prefix' => 'auth'

    ], function ($router) {
        Route::post('login', 'AuthController@login')->name('login');
        Route::post('register', 'AuthController@register')->name('register');
    });


    /**
     * Grupo de urls protegidas por JWT
     *
     */
    Route::group([
        'middleware' => 'apiJWT'
    ], function(){

        Route::group([
            'prefix' => 'auth'
        ],function(){
            Route::post('logout', 'AuthController@logout')->name('logout');
            Route::post('refresh', 'AuthController@refresh')->name('refresh');
            Route::post('me', 'AuthController@me')->name('me');
        });

        Route::group([
            'prefix' => 'categories'
        ],function(){
            Route::get('/', 'CategoriesController@index')->name('index_categories');
            Route::get('/{id}', 'CategoriesController@show')->name('show_categories');
            Route::post('/', 'CategoriesController@store')->name('store_categories');
            Route::put('/{id}', 'CategoriesController@update')->name('update_categories');
            Route::delete('/{id}', 'CategoriesController@destroy')->name('destroy_categories');
        });

        Route::group([
            'prefix' => 'products'
        ],function(){
            Route::get('/', 'ProductsController@index')->name('index_products');
            Route::get('/{id}', 'ProductsController@show')->name('show_products');
            Route::post('/', 'ProductsController@store')->name('store_products');
            Route::put('/{id}', 'ProductsController@update')->name('update_products');
            Route::delete('/{id}', 'ProductsController@destroy')->name('destroy_products');

            Route::get('/categories/{id_category}', 'ProductsController@index_category')->name('index_products_category');
        });

        Route::group([
            'prefix' => 'favorites'
        ],function(){
            Route::get('/user/{user_id}', 'FavoritesController@index_user')->name('index_user_favorites');
            Route::get('/user/{user_id}/{id}', 'FavoritesController@show_user')->name('show_user_favorites');
            Route::post('/user', 'FavoritesController@store_user')->name('store_user_favorites');
            Route::put('/user/{user_id}/{id}', 'FavoritesController@update_user')->name('update_user_favorites');
            Route::delete('/user/{user_id}/{id}', 'FavoritesController@destroy_user')->name('destroy_user_favorites');

            Route::get('/topproducts', 'FavoritesController@top_products_favorite')->name('top_products_favorites');
            Route::get('/count/{product_id}', 'FavoritesController@count_favorite')->name('count_favorites');
        });
        
    });
});