import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar, AsyncStorage, ActivityIndicator, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {getCategories, getTopProducts} from '../../API';

import ProductItem from '../../components/ProductItem';

import SearchIcon from '../../assets/pesquisa.svg';


import {
    Container,

    TitleBox,
    TitleText,
    SubtitleBox,
    SubtitleText1,
    SubtitleText2,

    SearchBox,
    SearchInput,

    CategoryBox,
    CategoryText,
    CategoryListBox,
    CategoryList,
    CategoryItemBox,
    CategoryItemImageBox,
    CategoryItemImage,
    CategoryItemText,

    TopProductsBox,
    TopProductsText,
    TopProductsList,

    Scroller,
    LoadingBox
} from './styles';

export default ({ navigation }) =>{
    const [categories, setCategories] = useState([
        // {id: '1', name: 'Cupcakes', url_img: require('../../assets/cupcakes.png')},
    ]);

    const [products, setProducts] = useState([
        // {id: '1', name: 'Bolo de aniversário', description: 'Lapsum akari migrate asta retum bloqueio margatira', price: 50.00, url_img: require('../../assets/bolo1.png')},
    ]);

    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    React.useEffect( () => {
        onRefresh();
    }, [onRefresh] );

    const onRefresh = () =>{
        setLoading(true);
        loadCategories();
        loadProducts();
    }

    const loadCategories = async () => {
        const result = await getCategories();
        
        if(result){
            const updateResult = result.map(function(item){
                item.url_img = 'http://192.168.1.141:80/imagens/'+item.url_img;
                return item;
            });
            
            if(updateResult){
                setCategories(updateResult);
            }
        }
    }

    const loadProducts = async () => {
        const result = await getTopProducts();
        
        if(result[0]){
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

    const renderCategories = ({item}) =>{        
        return(
            <CategoryItemBox
                onPress={
                    () => navigation.navigate('Categoria', {category: item})
                }
            >
                <CategoryItemImageBox>
                    <CategoryItemImage source={{uri: ''+item.url_img}}/>
                </CategoryItemImageBox>
                <CategoryItemText>{item.name}</CategoryItemText>
            </CategoryItemBox>
        )
    }

    const renderTopProducts = ({item}) =>{
        return(
            <ProductItem item={item}/>
        );
    }

    return(
        <Container>
            <TitleBox>
                <LinearGradient
                    // colors={['#7E6A54','#442707','#482B0C','#513518']}
                    style={{
                        flex: 1
                    }}
                    // locations={[0.0, 0.10, 0.20, 0.99]}

                    start={{ x: -0.2, y: -0.2 }}
                    end={{ x: 1, y: 1 }}
                    // locations={[0.0, 0.1, 0.9, 0.99]}
                    colors={['#7E6A54', '#513518','#482B0C', '#442707']}
                    
                >
                    <TitleText>Deliciante Sabores</TitleText>

                    <SubtitleBox>
                        <SubtitleText1>escolha uma </SubtitleText1>
                        <SubtitleText2>delícia</SubtitleText2>
                    </SubtitleBox>
                </LinearGradient>
            </TitleBox>

            <SearchBox>
                <SearchIcon width="24px" height="24px" fill="#7495E2"/>
                <SearchInput placeholder="Pesquisar delícias" />
            </SearchBox>
            
            {isLoading ?            
            <LoadingBox>
                <ActivityIndicator size="large" color="#0000ff"/>
            </LoadingBox>
            :
            <Scroller
                horizontal={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <CategoryBox>
                    <CategoryText>Categorias</CategoryText>
                    <CategoryList
                        data={categories}
                        renderItem={renderCategories}
                        keyExtractor={item => ''+item.id}
                        numColumns={1}
                        horizontal={true}
                    />
                
                </CategoryBox>

                <TopProductsBox>
                    <TopProductsText>Top Delícias</TopProductsText>

                    <TopProductsList
                        data={products}
                        renderItem={renderTopProducts}
                        keyExtractor={item => ''+item.id}
                        numColumns={1}
                        horizontal={true}
                    />
                </TopProductsBox>
            </Scroller>
            }
        </Container>
    )
}