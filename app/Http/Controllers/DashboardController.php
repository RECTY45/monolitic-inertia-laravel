<?php

namespace App\Http\Controllers;

use App\Models\Pemetaan;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $query = request('q');

        $pemetaan = Pemetaan::query()
            ->when($query, function($data, $value){
                $data->where('bahan_baku', 'LIKE', "%{$value}%");
            })
            ->latest()
            ->get();
        
        return inertia('Dashboard', compact('pemetaan'));
    }
}
