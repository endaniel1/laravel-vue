<?php

use App\Tasks;
use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        factory(Tasks::class, 35)->create();
    }
}
