<?php

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

Route::view('/gunplas', 'app');
Route::view('/gunpla/edit/{id}', 'app');
Route::view('/gunpla/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');

Route::view('/sign-in', 'app');