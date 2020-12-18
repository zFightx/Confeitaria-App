import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native';

import {getProductsCategory} from '../../API';

import ProductItem from '../../components/ProductItem';

import {
    Container,
    TitleBox,
    TitleText,
    ProductsBox,
    ProductsList
    
} from './styles';

export default ({ route, navigation }) =>{
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});

    React.useEffect( () => {

        if (route.params?.category) {
            const {category: categoryParam} = route.params;
            setCategory(categoryParam);
            loadProductCategory(categoryParam.id);
        }
        
    }, [route.params?.category]);

    const loadProductCategory = async (idCategory) => {
        
        const result = await getProductsCategory(idCategory);
        
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
                <TitleText>{category.name}</TitleText>
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