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
            alert("LOGOU");
        }
        else{
            alert(`Username ou Password errado.`);
        }
    } catch (error) {
        alert(`Username ou Password errado.`);
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
            alert("CADASTROU E LOGOU");
        }
        else{
            alert("Verifique se seus dados foram colocado corretamente.");
        }
    } catch (error) {
        alert("Verifique se seus dados foram colocado corretamente.");
    }
}



export default API;