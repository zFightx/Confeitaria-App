import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;


export const ProductsList = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const TitleBox = styled.View`
    background-color: #472A0A;

    align-items: center;
    padding: 10px;

    flex-direction: row;
`;
export const TitleText = styled.Text`
    color: white;
    font-size: 18px;
    flex: 2;
    padding-left: 40px;
    /* background-color: black; */
`;

export const TitleBottomBack = styled.TouchableOpacity`
    flex: 1;
`;


export const ProductsBox = styled.View`
    align-items: center;
    flex: 1;
`;

export const LoadingBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;