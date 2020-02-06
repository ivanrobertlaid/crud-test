<?php

namespace App\Models;

use App\Models\File;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Crud extends Model
{

	use Sluggable;

	protected $table = 'crud';

	protected $fillable = ['name', 'email' 'address', 'zip', 'slug', 'phone'];

	return [
		'slug' => [
			'source' => 'name'
		]
	];

	 public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }
}
