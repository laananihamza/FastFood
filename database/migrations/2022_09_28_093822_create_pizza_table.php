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
        if (!Schema::hasTable('pizza')) {
            Schema::create('pizza', function (Blueprint $table) {
                $table->id();
                $table->string("name");
                $table->string("urlPhoto");
                $table->string('ingredients');
                $table->string("size", 2);
                $table->integer("price");
                $table->bigInteger("category_code")->unsigned();
                $table->foreign("category_code")->references("id")->on("category");
                $table->bigInteger("stock");
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
        Schema::dropIfExists('pizza');
    }
};
