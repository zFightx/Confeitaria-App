import React from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';

import {
    Container,
    FundoBackground,
    LogoLoja,
    FormBox,
    BoxUsername,
    BoxPassword,
    UsernameInput,
    PasswordInput,
    BoxButton,
    ButtonText,
    EsqueceuBox,
    EsqueceuText,
    CadastreBox,
    CadastreText
} from './styles';

import Fundo from '../../assets/fundo2.png';
import Logo from '../../assets/logo.png';

import UserIcon from '../../assets/user.svg';
import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/password.svg';

export default () =>{
    return(
        <Container>
            <StatusBar style="auto" />
            <FundoBackground source={Fundo}>
                <KeyboardAvoidingView 
                    behavior="position"

                >
                    <LogoLoja source={Logo} />
                    
                    <FormBox>
                        <BoxUsername>
                            <UserIcon width="24px" height="24px" fill="#DDA946" />
                            <UsernameInput placeholder="Username" placeholderTextColor="#CCC"/>
                        </BoxUsername>

                        <BoxPassword>
                            <EmailIcon width="24px" height="24px" fill="#DDA946"/>
                            <PasswordInput placeholder="E-mail" placeholderTextColor="#CCC"
                            textContentType="emailAddress"
                            />
                        </BoxPassword>

                        <BoxPassword>
                            <PasswordIcon width="24px" height="24px" fill="#DDA946"/>
                            <PasswordInput placeholder="Password" placeholderTextColor="#CCC"
                            secureTextEntry={true}
                            />
                        </BoxPassword>
                    </FormBox>
                
                    <BoxButton>
                        <ButtonText>Cadastrar</ButtonText>
                    </BoxButton>

                    <EsqueceuBox>
                        <EsqueceuText></EsqueceuText>
                    </EsqueceuBox>
                </KeyboardAvoidingView>
                
                {<CadastreBox>
                    <CadastreText
                        numberOfLines={2}
                        lineBreakMode="middle"
                    >Já possui um conta? Faça o Login</CadastreText>
                </CadastreBox>}
            </FundoBackground>
        </Container>
    )
}