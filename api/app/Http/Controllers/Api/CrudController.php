<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Crud;
use App\Models\File;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $crud = Crud::create($request->data);

            return response()->json(['crud_id' =>  $crud->id], Response::HTTP_OK);

        } catch (\Exception $e) {

          return response()->json(['message' => $e->getMessage()], Response::HTTP_BAD_REQUEST);

      }


  }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function uploadFiles(Request $request) 
    {

//         try {

//             $crud = Crud::findOrFail($request->crud_id);

//             if($request->hasFile('file')) {

//                 $request->validate([
//                     'file' => 'required|mimes:jpeg,png,jpg',
//                 ]);

//                 $path = 'files/' . $crud->slug;
//           /*
//           * SEARCH FOR PO FILES
//           */
//           if(\File::exists($path)){
//              \File::deleteDirectory($path);
//          }
//          $crud->files()->delete();

//          $file = $request->file('file');
//          $ext = $file->getClientOriginalExtension();

//         // PARSE PRODUCT SLUG AND IMG EXTENSION 
//          $file_name =  $crud->slug . "." . $ext;

//          $fileInfo = new File([
//             'file_name' => $file_name,
//             'directory_name' => $path
//         ]);
//         /*
//         */

//         // SAVE FILE
//         $crud->files()->save($fileInfo);

//         $slug = File::latest()->first();

//         $request->file->move($path, $slug);
//     }

//     return response()->json(true, Response::HTTP_OK);

// } catch(\Exception $e) {

//     return response()->json(['message' => $e->getMessage()], Response::HTTP_BAD_REQUEST);

// }
// }
}
