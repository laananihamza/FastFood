<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItems extends Model
{
    use HasFactory;
    public function Cart()
    {
        return $this->belongsTo(Cart::class);
    }
    public function products()
    {
        return $this->belongsToMany(products::class);
    }
}
