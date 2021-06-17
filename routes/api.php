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
//login
Route::post("user-signup", "UserController@userSignUp");
Route::post("user-login", "UserController@userLogin");
Route::get("user/{email}", "UserController@userDetail");

//model
Route::get('/gunplas', 'GunplaController@index');
Route::post('/gunpla/store', 'GunplaController@store');
Route::get('/gunpla/edit/{id}', 'GunplaController@getGunpla');
Route::get('/gunpla/{id}', 'GunplaController@getGunpla');
Route::put('/gunpla/{id}', 'GunplaController@update');
Route::delete('/gunpla/delete/{id}', 'GunplaController@delete');
