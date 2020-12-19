<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorites;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index_user($user_id)
    {
        try{
            $data = Favorites::join('users', 'favorites.user_id', '=', 'users.id')
                ->join('products', 'favorites.product_id', '=', 'products.id')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->select('favorites.id as id_fav', 'products.*', 'categories.name AS category')
                ->where('users.id', '=', $user_id)
                ->get();
            
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::indexSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::indexFail() . $error->getMessage()];
        }

        return response()->json($return);
    }

    public function top_products_favorite()
    {
        try{
            
            $data = DB::table('favorites')
                ->join('products', 'favorites.product_id', '=', 'products.id')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->select(DB::raw('favorites.id AS id_fav, products.*, categories.name AS category, COUNT(*) AS quantidade'))
                ->orderByDesc('quantidade')
                ->groupBy('products.id')
                ->limit(10)
                ->get();
            
            // DB::raw('SELECT favorites.id AS id_fav, products.*, categories.name AS category, count(*) AS quantidade FROM favorites INNER JOIN products ON products.id = favorites.product_id INNER JOIN categories ON categories.id = products.category_id GROUP BY products.id ORDER BY quantidade DESC');
                // SELECT favorites.id AS id_fav, products.*, categories.name AS category, count(*) AS quantidade FROM favorites INNER JOIN products ON products.id = favorites.product_id INNER JOIN categories ON categories.id = products.category_id GROUP BY products.id ORDER BY quantidade DESC;
            
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::indexSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::indexFail() . $error->getMessage()];
        }

        return response()->json($return);
    }

    public function count_favorite($product_id)
    {
        try{
            $data = Favorites::join('users', 'favorites.user_id', '=', 'users.id')
                ->join('products', 'favorites.product_id', '=', 'products.id')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->where('products.id', '=', $product_id)
                ->count();
            
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
    public function store_user(Request $request)
    {
        try{
            $favorite = $request->all();
            Favorites::create($favorite);
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::storeFail()];
            return response()->json($return);
        }
        
        try{
            $data = Favorites::where($favorite)->get()->first();
            $return = ['code' => 20, 'data' => $data, 'message' => ApiMessages::storeSuccess()];
        }catch(\Exception $error){
            $return = ['code' => 20, 'data' => [], 'message' => ApiMessages::storeSuccessPartial()];
        }

        return response()->json($return);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function show_user($id)
    {
        try{
            $favorite = Favorites::join('users', 'favorites.user_id', '=', 'users.id')
                ->join('products', 'favorites.product_id', '=', 'products.id')
                ->join('categories', 'products.category_id', '=', 'categories.id')
                ->select('products.*', 'categories.name AS category')
                ->where('favorites.id', '=', $id)
                ->get()->first();
            if($favorite){
                $return = ['code' => 20, 'data' => $favorite, 'message' => ApiMessages::showSuccess()];
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
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function edit(Favorites $favorites)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function update_user(Request $request, $id)
    {
        try{
            $upFavorite = $request->all();
            $favorite = Favorites::where('id', '=', $id)->get()->first();

            if($favorite){
                $favorite->update($upFavorite);
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
     * @param  \App\Models\Favorites  $favorites
     * @return \Illuminate\Http\Response
     */
    public function destroy_user($user_id, Favorites $id)
    {
        try{
            if($id->user_id == $user_id){
                $id->delete();
            }
            $return = ['code' => 20, 'message' => ApiMessages::destroySuccess()];
        }catch(\Exception $error){
            $return = ['code' => 40, 'data' => [], 'message' => ApiMessages::destroyFail()];
        }
        
        return response()->json($return);
    }
}
