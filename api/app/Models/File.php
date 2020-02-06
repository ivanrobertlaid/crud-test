<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
	use Sluggable;

	protected $table = 'files';

	// $table->string('file_name')->nullable();
	// $table->string('directory_name')->nullable();
	// $table->integer('fileable_id')->nullable();
	// $table->string('fileable_type')->nullable();
	// $table->text('slug');

	protected $fillable = ['file_name', 'directory_name' 'fileable_id', 'fileable_type', 'slug'];

	public function sluggable()
	{
		return [
			'slug' => [
				'source' => 'file_name'
			]
		];
	}

	public function fileable()
	{
		return $this->morphTo();
	}
}
