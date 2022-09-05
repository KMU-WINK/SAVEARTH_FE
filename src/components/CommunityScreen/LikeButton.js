import styled from "styled-components/native/dist/styled-components.native.esm";

export const LikeButton = ({title, onPress}) => {
    return <LikeButtons title={title} onPress={onPress}>
        <LikeTitle>{title}</LikeTitle>
    </LikeButtons>
}


const LikeButtons = styled.TouchableOpacity`
  //margin: 0 30px;
  font-size: 12pt;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LikeTitle = styled.Text`
  font-family: "NotoSansKR_700Bold";
  font-size: 12px;
  font-weight: normal;
  color: black;
`
