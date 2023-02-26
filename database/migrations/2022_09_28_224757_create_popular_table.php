<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('popular')) {
            Schema::create('popular', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->integer('price');
                $table->integer('description');
                $table->integer('urlPhoto');
                $table->bigInteger('category_code')->unsigned();
                $table->foreign('category_code')->references('id')->on('category');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('popular');
    }
};
