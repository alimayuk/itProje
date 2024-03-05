<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Blog extends Model
{
    use HasFactory;

    protected $guarded = ["id", "created_at", "updated_at"];
    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
    ];
    public function category():HasOne
    {
        return $this->hasOne(Category::class, "id", "category_id");
    }
    public function image():HasMany
    {
        return $this->hasMany(Image::class,"key_id","id");
    }
}
