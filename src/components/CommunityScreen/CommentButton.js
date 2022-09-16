import styled from "styled-components/native/dist/styled-components.native.esm";

export const CommentButton = ({title, onPress}) => {
    return <CommentButtons title={title} onPress={onPress}>
        <CommentTitle>{title}</CommentTitle>
    </CommentButtons>
}


const CommentButtons = styled.TouchableOpacity`
  font-size: 12pt;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CommentTitle = styled.Text`
  font-family: "NotoSansKR_700Bold";
  font-size: 12px;
  color: black;
`
