<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiMessages;
use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoriesController extends Controller
{
    // use ApiMessages;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $data = Categories::all();
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::indexSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::indexFail()];
        }

        return response()->json($return);
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
        try{
            $category = $request->all();
            Categories::create($category);
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::storeFail()];
            return response()->json($return);
        }
        
        try{
            $data = Categories::where($category)->get()->first();
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::storeSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 20, 'data' => [], 'message' => ApiMessages::storeSuccessPartial()];
        }

        return response()->json($return);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $category = Categories::find($id);
            if($category){
                $return = ['code' => 20, 'data' => $category, 'message' => ApiMessages::showSuccess()];
            }
            else{
                $return = ['code' => 20, 'data' => [], 'message' => ApiMessages::showSuccessPartial()];
            }
            
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::showFail()];
        }
        
        return response()->json($return);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $upCategory = $request->all();
            $category = Categories::where('id', '=', $id)->get()->first();

            if($category){
                $category->update($upCategory);
                $return = ['code' => 20, 'data' => $id, 'message' => ApiMessages::updateSuccess()];
            }
            else{
                $return = ['code' => 20, 'data' => $id, 'message' => ApiMessages::updateSuccessPartial()];
            }
            
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::updateFail()];
        }
        
        return response()->json($return);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categories $id)
    {
        try{
            $id->delete();

            $return = ['code' => 20, 'message' => ApiMessages::destroySuccess()];
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::destroyFail()];
        }
        
        return response()->json($return);
    }
}
