<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $data = Products::join('categories', 'products.category_id', '=', 'categories.id')
                ->select('products.*', 'categories.name AS category')
                ->get();
            
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::indexSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::indexFail() . $error->getMessage()];
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
            $product = $request->all();
            Products::create($product);
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::storeFail()];
            return response()->json($return);
        }
        
        try{
            $data = Products::where($product)->get()->first();
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::storeSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 20, 'data' => [], 'message' => ApiMessages::storeSuccessPartial()];
        }

        return response()->json($return);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $product = Products::join('categories', 'products.category_id', '=', 'categories.id')
                ->select('products.*', 'categories.name AS category')
                ->where('products.id', '=', $id)
                ->get()->first();
            if($product){
                $return = ['code' => 20, 'data' => $product, 'message' => ApiMessages::showSuccess()];
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
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $upProduct = $request->all();
            $product = Products::where('id', '=', $id)->get()->first();

            if($product){
                $product->update($upProduct);
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
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(Products $id)
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
