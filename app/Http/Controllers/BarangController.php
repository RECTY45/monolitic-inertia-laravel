<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $item = Barang::all();
        return Inertia::render('Barang/Index',[
            'barang' => $item,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Barang/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $validateData = $request->validate([
            'kode_barang' => ['required'],
            'nama_barang' => ['required'],
            'kategori' => ['required'],
            'harga_jual' => ['required'],
            'harga_beli' => ['required'],
            'stok' => ['required']
        ]);

       if ($validateData) {
         $check = Barang::create($validateData);
       }
       if ($check) {
        session()->flash('success','Fery Punya Barang Nassa');
        return to_route('barang.index');
       }
        return back()->with('error','Data Gagal Di Tambah');
    }

    /**
     * Display the specified resource.
     */
    public function show(Barang $barang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Barang $barang)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Barang $barang)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barang $barang)
    {
        $barang->delete();
        return back();
    }
}
