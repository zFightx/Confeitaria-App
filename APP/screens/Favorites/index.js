import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native';

import {getFavorites} from '../../API';

import ProductItem from '../../components/ProductItem';

import {
    Container,
    TitleBox,
    TitleText,
    ProductsBox,
    ProductsList
    
} from './styles';

export default ({ navigation }) =>{
    const [products, setProducts] = useState([]);

    React.useEffect( () => {
        loadFavorites();
    }, [loadFavorites]);

    const loadFavorites = async () => {
        const result = await getFavorites();
        
        if(result){
            const updateResult = result.map(function(item){
                item.url_img = 'http://192.168.1.141:80/imagens/'+item.url_img;
                return item;
            });
            
            if(updateResult){
                setProducts(updateResult);
            }
        }
    }

    const renderProducts = ({item}) =>{
        return(
            <ProductItem item={item}/>
        );
    }

    return(
        <Container>
            <TitleBox>
                <TitleText>Favoritos</TitleText>
            </TitleBox>

            <ProductsBox>
                <ProductsList
                    data={products}
                    renderItem={renderProducts}
                    keyExtractor={item => ''+item.id}                
                />            
            </ProductsBox>
            
        </Container>
    )
}