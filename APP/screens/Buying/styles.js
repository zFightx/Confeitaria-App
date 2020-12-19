import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const TitleBox = styled.View`
    background-color: #472A0A;

    align-items: center;
    padding: 10px;
`;
export const TitleText = styled.Text`
    color: white;
    font-size: 18px;
    /* background-color: black; */
`;

export const CarrinhoTitleBox = styled.View`
    margin-left: 20px;
    margin-top: 20px;
`;
export const CarrinhoTitleSubBox = styled.View`
    flex-direction: row;

    align-items: flex-end;
    align-content: flex-end;
`;
export const CarrinhoTitleText = styled.Text`
    color: #444;

    font-size: 20px;
    font-weight: bold;
`;
export const CarrinhoSubtitle = styled.Text`
    color: #656565;
    font-size: 16px;
    padding-left: 10px;
`;

export const ProductList = styled.FlatList`
    flex: 1;
    margin-top: 20px;
`;

export const ContainerProduct = styled.View`
    padding: 20px;
    
    height: 150px;
    /* background-color: black; */
    flex-direction: row;
`;
export const CarrinhoAddBox = styled.View`
    background-color: #45886055;

    width: 50px;

    justify-content: space-between;
    align-content: center;
    align-items: center;

    margin-right: 20px;

    border-radius: 25px;
`;
export const CarrinhoMoreBox = styled.TouchableOpacity`
    flex: 1;
    /* background-color: black; */

    justify-content: center;
    align-items: center;
`;
export const CarrinhoMoreText = styled.Text`
    font-weight: bold;
    font-size: 18px;

    color: #005A18;
    
`;

export const CarrinhoUnitsBox = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const CarrinhoUnitsText = styled.Text`
    font-weight: bold;
    font-size: 18px;

    color: #005A18;
    
    /* background-color: black; */
`;

export const CarrinhoLessBox = styled.TouchableOpacity`
    flex: 1;
    /* background-color: black; */
    justify-content: center;
    align-items: center;
`;
export const CarrinhoLessText = styled.Text`
    font-weight: bold;
    font-size: 18px;

    color: #005A18;
`;
export const ProductBox = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;

    background-color: #CCCCCCAA;
    border-radius: 20px;
    padding-left: 20px;
    /* padding-right: 20px; */
    padding-top: 5px;
    padding-bottom: 5px;
`;
export const ProductTextBox = styled.View`
    width: 60%;
    padding-right: 10px;
    overflow: hidden;
`;
export const ProductTitleText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #656565;
`;

export const ProductDescriptionText = styled.Text`
    font-size: 14px;
    color: #656565;
`;

export const ProductSubBox = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
`;
export const ProductTotalPriceText = styled.Text`
    font-size: 14px;
    font-weight: bold;

    border-right-width: 1px;
    border-right-color: #888;
    border-style: solid;
    padding-right: 10px;

    color: #656565;
`;
export const ProductQtdText = styled.Text`
    font-size: 14px;

    border-right-width: 1px;
    border-right-color: #888;
    border-style: solid;
    padding-right: 10px;

    color: #656565;
`;
export const ProductPriceText = styled.Text`
    font-size: 14px;
    color: #656565;

`;
export const ProductImageBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    /* background-color: black; */
`;
export const ProductImage = styled.Image`
    width: 84px;
    height: 84px;

    border-width: 3px;
    border-color: #888;
    
    /* margin-right: -50px; */
    /* margin-left: 20px; */
    /* margin-top: -50px; */
`;
export const ContainerFinish = styled.View`
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    align-items: center;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    overflow: hidden;

    elevation: 2;
`;
export const InfoBox = styled.View`
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 20px;
    padding-top: 10px;
`;
export const ProductsUnitsText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #777;
`;
export const TotalPriceText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #777;
`;
export const BottomBox = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #FF6767;

    width: 70%;
    height: 50px;

    border-radius: 20px;

    justify-content: center;
    align-items: center;
`;
export const BottomText = styled.Text`
    padding-left: 10px;

    font-size: 18px;
    font-weight: bold;
    color: white;
`;