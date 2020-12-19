import React, {useState} from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';

import {getFavorites} from '../../API';

import ProductItem from '../../components/ProductItem';

import {
    Container,
    TitleBox,
    TitleText,
    ProductsBox,
    ProductsList,
    LoadingBox
    
} from './styles';

export default ({ navigation }) =>{
    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(false);

    React.useEffect( () => {
        onRefresh();
    }, [onRefresh]);

    const onRefresh = () => {
        setLoading(true);
        loadFavorites();
    }

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

        setLoading(false);
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

            { isLoading ?
            <LoadingBox>
                <ActivityIndicator size="large" color="#0000ff"/>
            </LoadingBox>
            :
            <ProductsBox>
                <ProductsList
                    data={products}
                    renderItem={renderProducts}
                    keyExtractor={item => ''+item.id}   
                    refreshControl={
                        <RefreshControl enabled={true} refreshing={refreshing} onRefresh={onRefresh} />
                    }     
                        
                />            
            </ProductsBox>
            }
        </Container>
    )
}