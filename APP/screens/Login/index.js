import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';

import API from '../../API';

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

export default () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // React.useEffect( () => {

    // }, [] );

    const handleLogin = async () => {
        // alert("AQUI");
        try {
            const response = await API.get(`/usuarios/${username}/${password}`);
            const status = response.data.status;

            if(status == "success"){
                alert("Logou");
            }
            else{
                alert(`${response.data.menssage}`);
            }
        } catch (error) {
            alert("Erro " + error);
        }
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
                
                {<CadastreBox>
                    <CadastreText
                        numberOfLines={2}
                        lineBreakMode="middle"
                    >Ainda não possui um conta? Cadastra-se</CadastreText>
                </CadastreBox>}
            </FundoBackground>
        </Container>
    )
}