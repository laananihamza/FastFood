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
        if (!Schema::hasTable('tacos')) {
            Schema::create('tacos', function (Blueprint $table) {
                $table->id();
                $table->string("name");
                $table->string("urlPhoto");
                $table->integer("price");
                $table->bigInteger("stock");
                $table->bigInteger("category_code")->unsigned();
                $table->foreign("category_code")->references("id")->on("category");
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
        Schema::dropIfExists('tacos');
    }
};
