import React from 'react';
import { StatusBar, ActivityIndicator, AsyncStorage } from 'react-native';

import API, {checkToken} from '../../API';

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
            const jsonValue = await AsyncStorage.getItem('@token');
            const token = jsonValue != null ? JSON.parse(jsonValue) : null;

            if (token){
                const isValid = await checkToken(token);

                if(isValid){
                    alert("Token válido");
                }

                else{
                    // navigation.navigate('Login');
                    navigation.reset({routes:[{name:'Login'}]});
                }
            }
            else{
                navigation.reset({routes:[{name:'Login'}]});
            }
        } catch (error) {
            navigation.reset({routes:[{name:'Login'}]});
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