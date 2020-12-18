<?php

namespace App\Http\Controllers\Api;

class ApiMessages
{
    public static function indexSuccess(){
        return 'Elementos carregados com sucesso';
    }

    public static function indexFail(){
        return 'Houve um erro ao carregar.';
    }

    public static function storeSuccess(){
        return 'Elemento armazenado com sucesso';
    }

    public static function storeSuccessPartial(){
        return 'Elemento armazenado com sucesso, mas não recarregado.';
    }

    public static function storeFail(){
        return 'Houve um erro ao armazenar.';
    }

    public static function showSuccess(){
        return 'Elemento carregado com sucesso';
    }

    public static function showSuccessPartial(){
        return 'Elemento inexistente.';
    }   

    public static function showFail(){
        return 'Houve um erro ao carregar o elemento.';
    }

    public static function updateSuccess(){
        return 'Elemento atualizado com sucesso';
    }

    public static function updateSuccessPartial(){
        return 'Elemento inexistente';
    }

    public static function updateFail(){
        return 'Houve um erro ao atualizar o elemento.';
    }

    public static function destroySuccess(){
        return 'Elemento deletado com sucesso';
    }

    public static function destroyFail(){
        return 'Houve um erro ao excluir o elemento.';
    }
    
}