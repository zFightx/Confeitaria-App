import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

// TopProductsItemBox,
// TopProductsItemTextBox,
// TopProductsItemTitle,
// TopProductsItemDescription,
// TopProductsItemPrice,
// TopProductsItemImage,

export const TopProductsItemBox = styled.TouchableOpacity`
    width: 300px;
    height: 150px;

    /* border: 1px solid gray; */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 30px;

    /* border-color: #3F2100; */
    /* border: 1px solid gray; */

    margin-right: 30px;

    flex-direction: row;

    margin-bottom: 10px;
    margin-top: 10px;

    elevation: 2;

    /* overflow: hidden; */
    align-self:center;
`;

export const TopProductsItemTextBox = styled.View`
    flex: 1;

    padding-left: 20px;
    padding-top: 10px;
    padding-right: 10px;
`;

export const TopProductsItemTitle = styled.Text`
    font-size: 20px;
    font-weight:bold;
    color: #636363;
`;

export const TopProductsItemDescription = styled.Text`
    flex: 1;

    font-size: 14px;
    color: #636363cc;
`;

export const TopProductsItemPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;

    color: #646464;
`;

export const TopProductsItemImage = styled.Image`
    align-self: center;
    width: 90px;
    height: 90px;

    border-width: 3px;
    border-color: #aaa;
    border-radius: 20px;
    margin-right: -20px;
`;


export default ({item}) => {
    const navigation = useNavigation();
    return(
        <TopProductsItemBox
            onPress={
                () => navigation.navigate('Produto', {product: item})
            }
        >
            <TopProductsItemTextBox>
                <TopProductsItemTitle numberOfLines={1}>{item.name}</TopProductsItemTitle>
                <TopProductsItemDescription numberOfLines={3}>{item.description}</TopProductsItemDescription>
                <TopProductsItemPrice>R$ {item.preco}</TopProductsItemPrice>
            </TopProductsItemTextBox>
            <TopProductsItemImage source={{ uri: ''+item.url_img}} />

        </TopProductsItemBox>
    )
}