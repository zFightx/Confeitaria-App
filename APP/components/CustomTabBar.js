import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import FavoritesIcon from '../assets/favorite.svg';
import BuyingIcon from '../assets/carrinho.svg';
import AccountIcon from '../assets/account.svg';

const Container = styled.View`
    height: 60px;
    background-color: #F3F3F3;
    border: 1px solid #aaa;

    flex-direction: row;
`;

const BoxIcon = styled.TouchableOpacity`
    flex:1;

    justify-content: center;
    align-items: center;
`;

export default ({navigation, state}) => {

    const goTo = (screen) =>{
        navigation.navigate(screen);
    }

    return(
        <Container>
            <BoxIcon
                onPress={() => goTo('Home')}
            >
                <HomeIcon width="24px" height="24px" fill="#000"
                    style={state.index === 0 ? {opacity: 1.0} : {opacity: 0.7}}
                />
            </BoxIcon>

            <BoxIcon
                onPress={() => goTo('Favorites')}
            >
                <FavoritesIcon width="24px" height="24px" fill="#000" 
                    style={state.index === 1 ? {opacity: 1.0} : {opacity: 0.7}}
                />
            </BoxIcon>

            <BoxIcon
                onPress={() => goTo('Buying')}
            >
                <BuyingIcon width="24px" height="24px" fill="#000" 
                    style={state.index === 2 ? {opacity: 1.0} : {opacity: 0.7}}
                />
            </BoxIcon>

            <BoxIcon
                onPress={() => goTo('Account')}
            >
                <AccountIcon width="24px" height="24px" fill="#000" 
                    style={state.index === 3 ? {opacity: 1.0} : {opacity: 0.7}}
                />
            </BoxIcon>
        </Container>
    )
}