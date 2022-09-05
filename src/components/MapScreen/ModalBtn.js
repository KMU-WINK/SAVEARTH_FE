import styled from "styled-components/native";

<<<<<<< HEAD
export const ModalBtn = ({title, full, w, h}) => {
    return <Button full={full} w={w} h={h}>
=======
export const ModalBtn = ({title, full, onPress}) => {
    return <Button full={full} onPress={onPress}>
>>>>>>> 2a3ba52d4207f6598074a0f3e05ae9a8be588e19
        <BtnText full={full}>{title}</BtnText>
    </Button>
}

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props=>props.full? "#218EF2":"#FFFFFF"};
  border: 2px solid #218EF2;
  border-radius: 100px;
  width: ${props=>props.w || 150}px;
  height: ${props=>props.h || 52}px;
  margin-bottom: ${props=>props.h && 20}px;
`
const BtnText = styled.Text`
  font-family: 'NotoSansKR_700Bold';
  text-align: center;
  color: ${props=>props.full? "#FFFFFF":"#218EF2"};
`
