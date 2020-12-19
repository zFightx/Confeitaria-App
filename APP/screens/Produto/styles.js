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

export const Scroller = styled.ScrollView`
    margin-top: 20px;
`;

export const TitleBottomBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding-left: 10px;
    padding-right: 30px;
    padding-top: 20px;
`;
export const TitleBottomBack = styled.TouchableOpacity`
    align-items: center;
    align-content: center;
`;
export const TitleBottomFavorite = styled.TouchableOpacity`
    align-items: center;
    align-content: center;
`;
export const TitleImageBox = styled.View`
    margin-top: -120px;
    align-items: center;
`;
export const TitleImage = styled.Image`
    width: 200px;
    height: 200px;

    border-width: 3px;
    border-color: #3F2100;
    border-radius: 20px;

    /* box-shadow: 2px 2px 10px #3F2100; */
`;
export const InfoBox = styled.View`
    margin-top: 20px;
    padding-left: 50px;
`;
export const InfoTitle = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #646464;
`;
export const InfoDescription = styled.Text`
    margin-top: 10px;
    font-size: 16px;
    width: 90%;
    color: #666;
`;
export const AtributesBox = styled.View`
    flex-direction: row;

    align-content: center;
    align-items: center;

    justify-content: space-around;

    padding-left: 10px;
    padding-right: 10px;

    margin-top: 20px;
`;
export const AtributesFavoritesBox = styled.View`
    flex-direction: row;

    align-content: center;
    align-items: center;
`;
export const AtributesFavoriteText = styled.Text`
    font-size: 18px;

    margin-left: 10px;

    color: #959595;
`;
export const AtributesPrice = styled.Text`
    font-size: 38px;

    font-weight: bold;
    color: #3F2100;
`;
export const BottomBox = styled.TouchableOpacity`
    margin-top: 50px;
    background-color: #3F2100;

    width: 150px;
    height: 50px;
    border-radius: 75px;

    align-self: center;
    align-content: center;
    align-items: center;
    justify-content: center;

    margin-bottom: 50px;
`;
export const BottomText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;
