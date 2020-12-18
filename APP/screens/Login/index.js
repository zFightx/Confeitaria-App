import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native';

import API, {Login} from '../../API';

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
import PasswordIcon from '../../assets/password.svg';

export default ({ navigation }) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // React.useEffect( () => {

    // }, [] );

    const handleLogin = async () => {
        await Login(username, password);
        
    }

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
                            <UsernameInput 
                                placeholder="Username" 
                                placeholderTextColor="#CCC"
                                value={username}
                                onChangeText={t => setUsername(t)}
                            />
                        </BoxUsername>

                        <BoxPassword>
                            <PasswordIcon width="24px" height="24px" fill="#DDA946"/>
                            <PasswordInput 
                                placeholder="Password" 
                                placeholderTextColor="#CCC"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={t => setPassword(t)}
                            />
                        </BoxPassword>
                    </FormBox>
                
                    <BoxButton
                        onPress={handleLogin}
                    >
                        <ButtonText>Entrar</ButtonText>
                    </BoxButton>

                    <EsqueceuBox>
                        <EsqueceuText>Esqueceu a senha?</EsqueceuText>
                    </EsqueceuBox>
                </KeyboardAvoidingView>
                
                {<CadastreBox
                    onPress={ () => {navigation.navigate('Cadastro') } }
                >
                    <CadastreText
                        numberOfLines={2}
                        lineBreakMode="middle"
                    >Ainda não possui uma conta? Cadastra-se</CadastreText>
                </CadastreBox>}
            </FundoBackground>
        </Container>
    )
}