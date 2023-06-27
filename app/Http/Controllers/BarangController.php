<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $barang = Barang::all();
        return inertia('Barang/Index',compact('barang'));
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

        try{
            Barang::create($validateData);
        }catch(Exception $e){
            session()->flash('error','Data Gagal  Di Tambah' . $e->getMessage()); 
            return back();
        }
        session()->flash('success','Data Anda Berhasil Di Input');
        return to_route('barang.index');
       
    }

    /**
     * Display the specified resource.
     */
    public function show(Barang $barang)
    {
        return inertia('Barang/Show', compact('barang'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Barang $barang)
    {
        return inertia('Barang/Update', compact('barang'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Barang $barang)
    {
        $validateData =  $request->validate([
                'kode_barang' => ['required'],
                'nama_barang' => ['required'],
                'kategori'    => ['required'],
                'harga_jual'  => ['required'],
                'harga_Beli'  => ['required'],
                'stok'        => ['required']
        ]);
        
        try {
            $barang->update($validateData);
        } catch (Exception $e) {
           session()->flash('error','Data Gagal Di Ubah!');
           return back();
        }
        session()->flash('success','Data Berhasil Di Ubah!');
        return to_route('barang.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barang $barang)
    {
        $barang->delete();
        session()->flash('success','Data Berhasil Di Hapus!');
        return back();
    }
}
