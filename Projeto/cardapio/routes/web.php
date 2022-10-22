<?php


use App\Http\Controllers\notasController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\pedidos;
use App\Models\produtos;

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/exibir', function () {
    $pedidos=produtos::orderBy('id')->get(); 

    return view('pedidos.exibir',['pedidos'=>$pedidos]);
});

Route::resource('/notas',notasController::class);
Route::resource('/pedidos',pedidos::class);
