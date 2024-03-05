<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $guarded = ["id","created_at","updated_at"];
    public function blog(){
        return $this->hasOne(Blog::class,"id","key_id");
    }
}
