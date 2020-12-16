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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('App\Http\Controllers\Api')->name('api.')->group(function() {
    Route::prefix('/usuarios')->group(function(){
        Route::get('/', 'UsuariosController@selectAll')->name('selectAll_usuarios');
        Route::get('/{username}/{password}', 'UsuariosController@select')->name('select_usuarios');
        Route::get('/{username}', 'UsuariosController@autenticate')->name('autenticate_usuarios');

        Route::post('/', 'UsuariosController@insert')->name('insert_usuarios');
        Route::put('/{id}', 'UsuariosController@update')->name('update_usuarios');
        Route::delete('/{id}', 'UsuariosController@delete')->name('delete_usuarios');
    });
});
