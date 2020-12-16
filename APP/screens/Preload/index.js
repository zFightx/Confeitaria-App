import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container,
    FundoBackground,
    LogoLoja
} from './styles';

import Fundo from '../../assets/fundo2.png';
import Logo from '../../assets/logo.png';

export default () =>{
    return(
        <Container>
            <StatusBar style="auto" />
            <FundoBackground source={Fundo}>
                <LogoLoja source={Logo} />
            </FundoBackground>
        </Container>
    )
}