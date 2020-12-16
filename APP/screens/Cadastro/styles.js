import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const FundoBackground = styled.ImageBackground`
    flex: 1;
    /* justify-content: center; */
    align-items:center;
`;

export const LogoLoja = styled.Image`
    width: 220px;
    height: 200px;
    resize-mode: stretch;

    margin-top: 20px;

    align-self: center;
`;

export const FormBox = styled.View`
    /* flex: 1; */

    margin-top: 30px;

    align-self: center;
`;

export const BoxUsername = styled.View`
    background-color: rgba(0,0,0,0.8);

    width: 300px;
    height: 57px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-left: 10px;
    padding-right: 10px;

    border-radius: 5px;
`;

export const BoxPassword = styled.View`
    background-color: rgba(0,0,0,0.8);

    width: 300px;
    height: 57px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    padding-left: 10px;
    padding-right: 10px;

    border-radius: 5px;
`;

export const UsernameInput = styled.TextInput`
    flex: 1;
    color: white;
    
    margin-left: 10px;

    font-size: 20px;
`;

export const PasswordInput = styled.TextInput`
    flex: 1;
    color: white;

    margin-left: 10px;

    font-size: 20px;
`;

export const BoxButton = styled.TouchableOpacity`
    width: 235px;
    height: 57px;

    background-color: #412300;

    margin-top: 20px;
    border-radius: 25px;

    justify-content: center;
    align-items: center;

    align-self: center;

`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
`;

export const EsqueceuBox = styled.TouchableOpacity`
    margin-top: 10px;

    align-self: center;
`;

export const EsqueceuText = styled.Text`
    color: white;
    text-shadow: 3px 3px 6px black;
    font-weight: bold;    
`;

export const CadastreBox  = styled.TouchableOpacity`
    width: 35%;
    flex: 1;

    justify-content: flex-end;

    margin-bottom: 20px;
`;

export const CadastreText  = styled.Text`
    color: white;
    text-shadow: 3px 3px 6px black;
    font-weight: bold;  
    text-align: center;
`;