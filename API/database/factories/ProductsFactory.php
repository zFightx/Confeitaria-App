<?php

namespace Database\Factories;

use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Categories;

class ProductsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Products::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->words(2, true),
            'description' => $this->faker->realText(200),
            'preco' => $this->faker->randomFloat(2, 10, 200),
            'url_img' => 'bolo1.png',
            'category_id' => Categories::inRandomOrder()->value('id')
        ];
    }
}
