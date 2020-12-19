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
`;
export const TitleText = styled.Text`
    color: white;
    font-size: 18px;
    
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