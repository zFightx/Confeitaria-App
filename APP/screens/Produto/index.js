import React, {useState} from 'react';
import { KeyboardAvoidingView, StatusBar, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {getFavorites, getCountFavorite, insertFavorite, deleteFavorite} from '../../API';

import {
    Container,

    TitleBox,
    TitleBottomBox,
    TitleBottomBack,
    TitleBottomFavorite,
    TitleImageBox,
    TitleImage,

    InfoBox,
    InfoTitle,
    InfoDescription,

    AtributesBox,
    AtributesFavoritesBox,
    AtributesFavoriteText,
    AtributesPrice,

    BottomBox,
    BottomText,
    

    Scroller
} from './styles';

import ArrowIcon from '../../assets/arrowLeft.svg';
import FavoriteIcon from '../../assets/favorite.svg';

export default ({ route, navigation }) =>{
    const [product, setProduct] = useState({});
    const [favorite, setFavorite] = useState({});
    const [countFavs, setCountFavs] = useState(0);

    React.useEffect( () => {
        if(route.params?.product){
            const {product: productParam} = route.params;
            setProduct(productParam);  
            
            verifyFavorite(productParam.id);
            countFavorites(productParam.id);
        }
    }, [route.params?.product] );

    const verifyFavorite = async (idProduct) => {
        setFavorite(null);
        const response = await getFavorites();

        if(response){
            const element = response.filter( (item) => item.id == idProduct );
            if(element.length > 0){
                setFavorite(element[0]);
            }
            else{
                setFavorite(null);
            }
        }
        else{
            setFavorite(null);
        }
    }

    const countFavorites = async (idProduct) => {
        const response = await getCountFavorite(idProduct);

        setCountFavs(response);
    }

    const changeFavorite = async () => {
        if(favorite){
            await deleteFavorite(favorite.id_fav);
        }
        else{
            await insertFavorite(product.id);
        }

        await verifyFavorite(product.id);
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
                    <TitleBottomBox>
                        <TitleBottomBack
                            onPress={() => navigation.goBack()}
                        >
                            <ArrowIcon width="24px" height="24px" fill="#FFF" />
                        </TitleBottomBack>

                        <TitleBottomFavorite
                            onPress={() => changeFavorite()}
                        >
                            <FavoriteIcon width="24px" height="24px" fill={favorite ? "#FFFF00" : "#888"} />
                        </TitleBottomFavorite>
                    </TitleBottomBox>
                </LinearGradient>
            </TitleBox>
            <TitleImageBox>
                <TitleImage source={{uri: product.url_img}} />
            </TitleImageBox>
                
            <Scroller
                horizontal={false}>
                <InfoBox>
                    <InfoTitle>{product.name}</InfoTitle>
                    <InfoDescription>{product.description}</InfoDescription>
                </InfoBox>

                <AtributesBox>
                    <AtributesFavoritesBox>
                        <FavoriteIcon width="24px" height="24px" fill="#FFAA00" />
                        <AtributesFavoriteText>{countFavs} Favoritos</AtributesFavoriteText>
                    </AtributesFavoritesBox>
                    <AtributesPrice>R$ {product.preco}</AtributesPrice>
                </AtributesBox>      

                <BottomBox>
                    <BottomText>Fazer Pedido</BottomText>
                </BottomBox>  
            
            </Scroller>
        </Container>
    )
}