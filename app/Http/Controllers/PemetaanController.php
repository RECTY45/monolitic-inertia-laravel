<?php

namespace App\Http\Controllers;

use App\Models\Pemetaan;
use Exception;
use Illuminate\Http\Request;

class PemetaanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query = request('q');
        $pemetaan = Pemetaan::query()
            ->when($query, function($data, $value){
                $data->where('bahan_baku', 'LIKE', "%{$value}%")
                    ->orWhere('lokasi', 'LIKE', "%{$value}%")
                    ->orWhere('keterangan', 'LIKE', "%{$value}%");
            })
            ->latest()
            ->get();


        return inertia('Pemetaan/Index',compact('pemetaan'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Pemetaan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'bahan_baku' => ['required'],
            'gambar' => ['required'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'lokasi' => ['required'],
            'keterangan' => ['required']
        ]);
        if($request->file('gambar')){
            $validateData['gambar'] = $request->file('gambar')->store('gambar/pemetaan');
        }
        try{
            Pemetaan::create($validateData);
        }catch(Exception $e){
            session()->flash('error','Data Gagal  Di Tambah' . $e->getMessage()); 
            return back();
        }
        session()->flash('success','Data Anda Berhasil Di Input');
        return to_route('pemetaan.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Pemetaan $pemetaan)
    {
        return inertia('pemetaan/Show', compact('pemetaan'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pemetaan $pemetaan)
    {        
        return inertia('Pemetaan/Update', compact('pemetaan'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pemetaan $pemetaan)
    {

        $validateData = $request->validate([
            'bahan_baku' => ['required'],
            'gambar' => ['required','image','max:2048'],
            'latitude' => ['required'],
            'longitude' => ['required'],
            'lokasi' => ['required'],
            'keterangan' => ['required']
        ]);

        if($request->file('gambar')){
            $validateData['gambar'] = $request->file('gambar')->store('gambar/pemetaan');
        }

        try {
            $pemetaan->update($validateData);
        } catch (Exception $e) {
           session()->flash('error','Data Gagal Di Ubah!');
           return back();
        }
        session()->flash('success','Data Berhasil Di Ubah!');
        return to_route('pemetaan.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pemetaan $pemetaan)
    {
        $pemetaan->delete();
        session()->flash('success','Data Berhasil Di Hapus!');
        return back();
    }
}
