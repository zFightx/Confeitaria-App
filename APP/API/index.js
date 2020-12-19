import {AsyncStorage} from 'react-native';
import axios from 'axios';

const API = axios.create({baseURL:'http://192.168.1.141:8000/api'});

export const checkToken = async (token) => {
    try {
        const response = await API.post(`/auth/refresh?token=${token}`);
        const myToken = response.data.access_token;
        
        if (myToken){
            await AsyncStorage.setItem('@token', JSON.stringify(myToken));
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const Login = async (name, password) => {
    
    try {
        const response = await API.post(`/auth/login`, {
            name: name,
            password: password
        });

        const myToken = response.data.access_token;

        if(myToken){
            await AsyncStorage.setItem('@token', JSON.stringify(myToken));
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const Cadastro = async (name, email, password) => {
    try {
        const response = await API.post(`/auth/register`, {
            name,
            email,
            password
        });

        const myToken = response.data.access_token;

        if (myToken){
            await AsyncStorage.setItem('@token', JSON.stringify(myToken));
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const getCategories = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response = await API.get(`/categories?token=${myToken}`);
            const categories = response.data.data;

            if(categories){
                return categories;
            }
        }
        
    } catch (error) {
        // for debug
    }

    alert('Erro ao carregar categorias.');
}

export const getProducts = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response = await API.get(`/products?token=${myToken}`);
            const products = response.data.data;

            if(products){
                return products;
            }
        }
        
    } catch (error) {
        // for debug
    }

    alert('Erro ao carregar produtos.');
}

export const getTopProducts = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response = await API.get(`/favorites/topproducts?token=${myToken}`);
            const products = response.data.data;
            
            if(products){
                return products;
            }
        }
        
    } catch (error) {
        // for debug
    }

    alert('Erro ao carregar produtos.');
}

export const getFavorites = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response1 = await API.post(`/auth/me?token=${myToken}`);
            const data = response1.data;
            
            if(data){
                const myId = data.id;
                const response2 = await API.get(`/favorites/user/${myId}?token=${myToken}`);
                const myFavorites = response2.data.data;
                
                if(myFavorites){
                    return myFavorites;
                }
            }            
        }
    } catch (error) {
        // para de bug
        // alert('Erro na leitura de favoritos. ' + error);
    }

    alert('Erro na leitura de favoritos.');
}

export const getCountFavorite = async (idProduct) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response = await API.get(`/favorites/count/${idProduct}?token=${myToken}`);
            const data = response.data.data;
            
            if (response){
                return data;   
            }
            else{
                return 0;
            }
            
        }
    } catch (error) {
        // para de bug
        // alert('Erro na leitura de favoritos. ' + error);
    }

    alert('Erro na leitura de contagem.');
    return 0;
}

export const insertFavorite = async (idProduct) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response1 = await API.post(`/auth/me?token=${myToken}`);
            const data = response1.data;
            
            if(data){
                const myId = data.id;
                await API.post(`/favorites/user?token=${myToken}`,{
                    user_id: myId,
                    product_id: idProduct
                });

                return;
            }            
        }
    } catch (error) {
        // para de bug
        // alert('Erro na leitura de favoritos. ' + error);
    }

    alert('Erro na gravação de favoritos.');
}

export const deleteFavorite = async (idFavorite) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){
            const response1 = await API.post(`/auth/me?token=${myToken}`);
            const data = response1.data;
            
            if(data){
                const myId = data.id;
                await API.delete(`/favorites/user/${myId}/${idFavorite}?token=${myToken}`);

                return;
            }            
        }
    } catch (error) {
        // para de bug
        // alert('Erro na leitura de favoritos. ' + error);
    }

    alert('Erro na exclusão de favoritos.');
}

export const getProductsCategory = async (idCategory) => {
    try {
        const jsonValue = await AsyncStorage.getItem('@token');
        const myToken = jsonValue != null ? JSON.parse(jsonValue) : null;

        if(myToken){            
            const response = await API.get(`/products/categories/${idCategory}?token=${myToken}`);
            const products = response.data.data;
            
            if(products){
                return products;
            }
                     
        }
    } catch (error) {
        // para de bug
        // alert('Erro na leitura de favoritos. ' + error);
    }

    alert('Erro na leitura de categoria product.');
}



export default API;