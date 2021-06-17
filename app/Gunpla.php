<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gunpla extends Model
{
    protected $table = "gunplas";
    protected $fillable = ['photo', 'model', 'series', 'release', 'grade', 'price'];
}
