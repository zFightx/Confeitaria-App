import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const TitleBox = styled.View`
    height: 162px;
    width: 120%;
    margin-left: -10%;

    background-color: #3F2100;

    /* border-bottom-radius: 140px; */
    border-bottom-left-radius: 131px;
    border-bottom-right-radius: 131px;

    padding-right: 10%;
    padding-left: 10%;

    overflow: hidden;
`;

export const TitleText = styled.Text`
    color: white;

    font-size: 25px;
    /* font-family: 'Optima'; */

    margin-left: 40px;
    margin-top: 30px;
`;

export const SubtitleBox = styled.View`
    flex-direction: row;

    margin-left: 40px;
`;

export const SubtitleText1 = styled.Text`
    color: white;
    opacity: 0.5;

    font-size: 25px;
`;

export const SubtitleText2 = styled.Text`
    color: white;
    font-size: 25px;
`;

export const SearchBox = styled.View`
    width: 80%;
    height: 52px;

    flex-direction: row;

    elevation: 2;
    border: 1px solid #ddd;
    border-radius: 10px;

    margin-top: -30px;
    align-self: center;
    align-items: center;

    background-color: rgba(255,255,255, 0.92);

    padding-left: 20px;
    padding-right: 20px;
`;

export const SearchInput = styled.TextInput`
    margin-left: 10px;

    font-size: 18px;
`;

export const CategoryBox = styled.View`
    /* margin-top: 20px; */
    padding-left: 10px;

    height: 110px;

    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    border-style: solid;

    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const CategoryText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const CategoryListBox = styled.View`
    
`;

export const CategoryList = styled.FlatList`
    overflow: scroll;
`;

export const CategoryItemBox = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex: 1;

    margin-right: 30px;
`;

export const CategoryItemImageBox = styled.View`
    border-width: 1px;
    border-color: #3F210022;
    width: 60px;
    height: 60px;
    border-radius: 30px;

    justify-content: center;
    align-items: center;
`;

export const CategoryItemImage = styled.Image`
    width: 40px;
    height: 40px;    
`;

export const CategoryItemText = styled.Text`

`;

export const TopProductsBox = styled.View`
    margin-top: 50px;
    padding-left: 10px;

    /* height: 200px; */
`;

export const TopProductsText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const TopProductsList = styled.FlatList`

`;

export const Scroller = styled.ScrollView`
    margin-top: 20px;
`;

export const LoadingBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;