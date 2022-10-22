<?php

namespace App\Http\Controllers;

use App\Models\produtos;
use App\Models\notas;
use Illuminate\Http\Request;

class pedidos extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {  
        $count=produtos::count();
        $pedidos=produtos::orderBy('id')->get(); 
        $notas=notas::orderBy('id')->get(); 
        $countN=notas::count();
        $mesa=10; 
        return view('pedidos.index',['notas'=>$notas,'countN'=>$countN,'mesa'=>$mesa,'pedidos'=>$pedidos,'count'=>$count]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       return view('pedidos.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       
        produtos::create($request->all());
       
        return redirect()->route('pedidos.index');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(produtos $pedido)
    {
        return view('pedidos.show',['pedido'=> $pedido]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(produtos $pedido)
    {

        return view('pedidos.edit',['pedido'=>$pedido]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, produtos $pedido)
    {
        $pedido->fill($request->all());
        $pedido->save();

    }

    public function exibir(){
        $pedidos=produtos::orderBy('id')->get(); 

        return view('pedidos.exibir',['pedidos'=>$pedidos]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(produtos  $pedido)
    {
        $pedido->delete();
        
       

    }
}
