import React from 'react';
import { StatusBar, ActivityIndicator, AsyncStorage } from 'react-native';

import API from '../../API';

import {
    Container,
    FundoBackground,
    LogoLoja
} from './styles';

import Fundo from '../../assets/fundo2.png';
import Logo from '../../assets/logo.png';

export default ( {navigation} ) =>{
    React.useEffect( () => {
        verifyLogin();
    }, [verifyLogin] )

    const verifyLogin = async () =>{
        try {
            const jsonValue = await AsyncStorage.getItem('@username');
            const username = jsonValue != null ? JSON.parse(jsonValue) : null;

            if (username){
                validarUsername(username);
            }
            else{
                navigation.navigate('Login');
            }
        } catch (error) {
            navigation.navigate('Login');
        }
    }

    const validarUsername = async (username) =>{
        try {
            const response = await API.get(`/usuarios/${username}`);
            if (response.data.status == 'success'){
                navigation.navigate('Cadastro');
            }
        } catch (error) {
            navigation.navigate('Login');
        }
    }

    return(
        <Container>
            <StatusBar style="auto" />
            <FundoBackground source={Fundo}>
                <LogoLoja source={Logo} />
                <ActivityIndicator size="large" color="#ff0000" />
            </FundoBackground>
        </Container>
    )
}