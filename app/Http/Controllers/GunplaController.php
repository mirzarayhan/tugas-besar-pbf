<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GunplaController extends Controller
{
    public function index()
    {
        $gunplas = \App\Gunpla::all();
 
        return $gunplas->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'photo' => 'required',
          'model' => 'required',
          'series' => 'required',
          'release' => 'required',
          'grade' => 'required',
          'price' => 'required'
        ]);
 
        $project = \App\Gunpla::create([
          'photo' => $validatedData['photo'],
          'model' => $validatedData['model'],
          'series' => $validatedData['series'],
          'release' => $validatedData['release'],
          'grade' => $validatedData['grade'],
          'price' => $validatedData['price'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Gunpla created successfully!'
        ];
 
        return response()->json($msg);
    }

    public function getGunpla($id) // for edit and show
    {
        $gunpla = \App\Gunpla::find($id);
 
        return $gunpla->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'photo' => 'required',
            'model' => 'required',
            'series' => 'required',
            'release' => 'required',
            'grade' => 'required',
            'price' => 'required',
        ]);
 
        $gunpla = \App\Gunpla::find($id);
        $gunpla->photo = $validatedData['photo'];
        $gunpla->model = $validatedData['model'];
        $gunpla->series = $validatedData['series'];
        $gunpla->release = $validatedData['release'];
        $gunpla->grade = $validatedData['grade'];
        $gunpla->price = $validatedData['price'];
        $gunpla->save();
 
        $msg = [
            'success' => true,
            'message' => 'Gunpla updated successfully'
        ];
 
        return response()->json($msg);
    }

    public function delete($id)
    {
        $gunpla = \App\Gunpla::find($id);
        if(!empty($gunpla)){
            $gunpla->delete();
            $msg = [
                'success' => true,
                'message' => 'Gunpla deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Gunpla deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
