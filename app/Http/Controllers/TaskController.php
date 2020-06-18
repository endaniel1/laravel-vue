<?php

namespace App\Http\Controllers;

use App\Tasks;
use Illuminate\Http\Request;

class TaskController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        $tasks = Tasks::orderBy("id", "ASC")->paginate(4);

        return [
            "pagination" => [
                "total"        => $tasks->total(), //total de registros
                "current_page" => $tasks->currentPage(), //pagina actual
                "per_page"     => $tasks->perPage(), //por pagina
                "last_page"    => $tasks->lastPage(), //ultima pagina
                "from"         => $tasks->firstItem(), //primer elemento
                "to"           => $tasks->lastItem(), //ultimo elemento
            ],
            "tasks"      => $tasks,
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $this->validate($request, [
            "keep" => "required",
        ]);
        print_r($request->all());
        Tasks::create($request->all());

        return;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $this->validate($request, [
            "keep" => "required",
        ]);
        Tasks::find($id)->update($request->all());

        return;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $tasks = Tasks::findOrFail($id);
        $tasks->delete();
    }
}
