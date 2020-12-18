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
        });

        Route::group([
            'prefix' => 'favorites'
        ],function(){
            Route::get('/', 'FavoritesController@index')->name('index_favorites');
            Route::get('/{id}', 'FavoritesController@show')->name('show_favorites');
            Route::post('/', 'FavoritesController@store')->name('store_favorites');
            Route::put('/{id}', 'FavoritesController@update')->name('update_favorites');
            Route::delete('/{id}', 'FavoritesController@destroy')->name('destroy_favorites');
        });
        
    });
});