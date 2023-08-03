<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemetaan extends Model
{
    use HasFactory;
    protected $fillable = [
        'bahan_baku',
        'gambar',
        'latitude',
        'longitude',
        'lokasi',
        'keterangan',
    ];
}
