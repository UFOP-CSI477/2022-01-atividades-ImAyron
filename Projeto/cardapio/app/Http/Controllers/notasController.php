<?php

namespace App\Http\Controllers;
use App\Models\notas;
use Illuminate\Http\Request;

class notasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $notas=notas::orderBy('created_at')->get(); 
        $countN=notas::count();
        
        return view('notas.index',['notas'=>$notas,'countN'=>$countN]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        notas::create($request->all());
        session()->flash('mensagem', 'Nota criada cadastrada com sucesso!');
        return redirect()->route('notas.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(notas $nota)
    {
        return view('notas.show',['nota'=>$nota]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(notas $nota)
    {
        return view('notas.edit',['nota'=>$nota]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, notas $nota)
    {
        $nota->fill($request->all());
        $nota->save();
        return redirect()->route('notas.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
