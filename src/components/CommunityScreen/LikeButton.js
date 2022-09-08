import styled from "styled-components/native/dist/styled-components.native.esm";
import emptyHeart from './emptyHeart.png';
import fullHeart from './fullHeart.png';

export const LikeButton = ({like, title, onPress}) => {
    return <LikeButtons title={title} onPress={onPress}>
        <Heart source={like?fullHeart:emptyHeart}/>
        <LikeTitle>{title}</LikeTitle>
    </LikeButtons>
}


const LikeButtons = styled.TouchableOpacity`
  font-size: 12pt;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const LikeTitle = styled.Text`
  font-family: NotoSansKR_700Bold;
  font-size: 12px;
  font-weight: normal;
  color: black;
`
const Heart = styled.Image`
  margin-right: 3px;
`
