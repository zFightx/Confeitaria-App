import React, {useState} from 'react';
import { ActivityIndicator } from 'react-native';

import {getProductsCategory} from '../../API';

import ProductItem from '../../components/ProductItem';

import ArrowIcon from '../../assets/arrowLeft.svg';

import {
    Container,
    TitleBox,
    TitleText,
    TitleBottomBack,
    ProductsBox,
    ProductsList,
    LoadingBox
    
} from './styles';

export default ({ route, navigation }) =>{
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [isLoading, setLoading] = useState(true);

    React.useEffect( () => {

        if (route.params?.category) {
            setLoading(true);
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
                <TitleBottomBack
                    onPress={() => navigation.goBack()}
                >
                    <ArrowIcon width="24px" height="24px" fill="#FFF" />
                </TitleBottomBack>
                <TitleText>{category.name}</TitleText>
            </TitleBox>

            {isLoading ?            
            <LoadingBox>
                <ActivityIndicator size="large" color="#0000ff"/>
            </LoadingBox>
            :
            <ProductsBox>
                <ProductsList
                    data={products}
                    renderItem={renderProducts}
                    keyExtractor={item => ''+item.id}                
                />            
            </ProductsBox>
            }
            
        </Container>
    )
}