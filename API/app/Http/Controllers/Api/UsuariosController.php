<?php

namespace App\Http\Controllers\Api;

use App\Models\Usuarios;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class UsuariosController extends Controller
{
    private $usuario;

    public function __construct(Usuarios $usuario){
        $this->usuario = $usuario;
    }

    public function selectAll(){
        try{
            $data = ['status' => 'success', 'data' => $this->usuario->paginate(5)];
            return response()->json($data);
        }catch(\Exception $error){
            $messageError = ['status' => 'error', 'menssage' => 'Erro na tentative de ler os dados.'];
            return response()->json($messageError);
        }
    }

    public function select($username, $password){
    
        try{
            $usuario = DB::table('usuarios')->where(
                'username', '=', $username
            )->get()->first();

            if($usuario){
                if($usuario->password == $password){
                    $data = ['status' => 'success', 'data' => $usuario];
                    return response()->json($data);
                }

                $messageError = ['status' => 'error', 'menssage' => 'Senha inválida', 'data' => []];
                return response()->json($messageError);
            }
            else{
                $messageError = ['status' => 'error', 'menssage' => 'Usuário inexistente', 'data' => []];
                return response()->json($messageError);
            }

            
        }catch(\Exception $error){
            $messageError = ['status' => 'error', 'menssage' => 'Erro na tentative de ler o dado. ' . $error->getMessage()];
            return response()->json($messageError);
        }
    }

    public function insert(Request $request){

        try{
            $usuarioBody = $request->all();
            $this->usuario->create($usuarioBody);

            $data = ['status' => 'success'];
            return response()->json($data);
        }catch(\Exception $error){
            $messageError = ['status' => 'error', 'menssage' => 'Erro na tentative de escrever o dado.'];
            return response()->json($messageError);
        }
    }

    public function update(Request $request, Usuarios $id){

        try{
            $usuarioBody = $request->all();
            $id->update($usuarioBody);
            $updatedUsuario = $this->usuarios->find($id);

            $data = ['status' => 'success', 'data' => $updatedUsuario];
            return response()->json($data);
        }catch(\Exception $error){
            $messageError = ['status' => 'error', 'menssage' => 'Erro na tentative de atualizar o dado.'];
            return response()->json($messageError);
        }
    }

    public function delete(Usuarios $id){
        
        try{
            $id->delete();
            $data = ['status' => 'success'];
            return response()->json($data);
        }catch(\Exception $error){
            $messageError = ['status' => 'error', 'menssage' => 'Erro na tentative de deletar o dado.'];
            return response()->json($messageError);
        }
    }
}
