import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {getCategories, getProducts} from '../../API';

import SearchIcon from '../../assets/pesquisa.svg';

// import '../../assets/*';

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
    CategoryItemImage,
    CategoryItemText,

    TopProductsBox,
    TopProductsText,
    TopProductsList,
    TopProductsItemBox,
    TopProductsItemTextBox,
    TopProductsItemTitle,
    TopProductsItemDescription,
    TopProductsItemPrice,
    TopProductsItemImage,

    Scroller
} from './styles';

export default ({ navigation }) =>{
    const [categories, setCategories] = useState([
        // {id: '1', name: 'Cupcakes', url_img: require('../../assets/cupcakes.png')},
    ]);

    const [products, setProducts] = useState([
        {id: '1', name: 'Bolo de aniversário', description: 'Lapsum akari migrate asta retum bloqueio margatira', price: 50.00, url_img: require('../../assets/bolo1.png')},
    ]);

    React.useEffect( () => {
        loadCategories();
        loadProducts();
    }, [loadCategories, loadProducts] );

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
        const result = await getProducts();
        
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

    const renderCategories = ({item}) =>{        
        return(
            <CategoryItemBox>
                <CategoryItemImage source={{uri: ''+item.url_img}}/>
                <CategoryItemText>{item.name}</CategoryItemText>
            </CategoryItemBox>
        )
    }

    const renderTopProducts = ({item}) =>{
        return(
            <TopProductsItemBox>
                <TopProductsItemTextBox>
                    <TopProductsItemTitle numberOfLines={1}>{item.name}</TopProductsItemTitle>
                    <TopProductsItemDescription numberOfLines={3}>{item.description}</TopProductsItemDescription>
                    <TopProductsItemPrice>R$ {item.preco}</TopProductsItemPrice>
                </TopProductsItemTextBox>
                <TopProductsItemImage source={{ uri: ''+item.url_img}} />

            </TopProductsItemBox>
        )
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
            
            <Scroller
                horizontal={false}>
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
        </Container>
    )
}