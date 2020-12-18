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


export default API;