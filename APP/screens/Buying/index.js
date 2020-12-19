import React, {useState} from 'react';
import { ActivityIndicator } from 'react-native';

import API from '../../API';

import BuyIcon from '../../assets/carrinho.svg';

import {
    Container,
    TitleBox,
    TitleText,

    CarrinhoTitleBox,
    CarrinhoTitleSubBox,
    CarrinhoTitleText,
    CarrinhoSubtitle,

    ProductList,
    ContainerProduct,

    CarrinhoAddBox,
    CarrinhoMoreBox,
    CarrinhoMoreText,
    CarrinhoUnitsBox,
    CarrinhoUnitsText,
    CarrinhoLessBox,
    CarrinhoLessText,

    ProductBox,
    ProductTextBox,
    ProductTitleText,
    ProductDescriptionText,
    ProductSubBox,
    ProductTotalPriceText,
    ProductQtdText,
    ProductPriceText,
    ProductImageBox,
    ProductImage,

    ContainerFinish,
    InfoBox,
    ProductsUnitsText,
    TotalPriceText,
    BottomBox,
    BottomText,

    
} from './styles';

export default ({ navigation }) =>{
    const [products, setProducts] = useState([
        {id: '1'},
        {id: '2'},
        {id: '3'},
    ]);

    const renderList = ({item}) =>{
        return(
            <ContainerProduct>
                <CarrinhoAddBox>
                    <CarrinhoMoreBox>
                        <CarrinhoMoreText>+</CarrinhoMoreText>
                    </CarrinhoMoreBox>

                    <CarrinhoUnitsBox>
                        <CarrinhoUnitsText>2x</CarrinhoUnitsText>
                    </CarrinhoUnitsBox>                   

                    <CarrinhoLessBox>
                        <CarrinhoLessText>-</CarrinhoLessText>
                    </CarrinhoLessBox>
                </CarrinhoAddBox>

                <ProductBox>
                    <ProductTextBox>
                        <ProductTitleText numberOfLines={1}>Bolo de Aniversário</ProductTitleText>
                        <ProductDescriptionText numberOfLines={2}>asuhdau hfaiufh aius hfuiah iufhaiushdu ihiauddh iauhd uiahd uih</ProductDescriptionText>
                        <ProductSubBox>
                            <ProductTotalPriceText numberOfLines={1}>R$ 160.0</ProductTotalPriceText>
                            <ProductQtdText numberOfLines={1}>2x</ProductQtdText>
                            <ProductPriceText numberOfLines={1}>80.00</ProductPriceText>
                        </ProductSubBox>

                    </ProductTextBox>

                    <ProductImageBox>
                        <ProductImage source={{uri: 'http://192.168.1.141:80/imagens/bolo1.png'}} />
                    </ProductImageBox>
                </ProductBox>
            </ContainerProduct>
        );
    }

    return(
        <Container>
            <TitleBox>
                <TitleText>Carrinho</TitleText>
            </TitleBox>
                        
            <ProductList 
                data={products}
                renderItem={renderList}
                keyExtractor={(item) => item.id}
                ListHeaderComponent = {
                    <CarrinhoTitleBox>
                        <CarrinhoTitleSubBox>
                            <BuyIcon width="36px" height="36px" fill="#A8A8A8" />
                            <CarrinhoTitleText>Meu carrinho</CarrinhoTitleText>
                        </CarrinhoTitleSubBox>

                        <CarrinhoSubtitle>Realize seu pagamento</CarrinhoSubtitle>
                     </CarrinhoTitleBox>
                }
                ListFooterComponent = {
                    <ContainerFinish>
                        <InfoBox>
                            <ProductsUnitsText>3 Itens</ProductsUnitsText>
                            <TotalPriceText numberOfLines={1}>R$ 160.00</TotalPriceText>
                        </InfoBox>

                        <BottomBox>
                            <BuyIcon width="24px" height="24px" fill="#FFF"/>
                            <BottomText>Realizar Pagamento</BottomText>
                        </BottomBox>
                    </ContainerFinish>
                }
            />
            
        </Container>
    )
}