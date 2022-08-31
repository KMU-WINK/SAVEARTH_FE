import styled from 'styled-components/native';

export const HomeButton = ({title, onPress}) => {
    return <Button onPress={onPress}>
        <Title>{title}</Title>
    </Button>
}

const Button = styled.TouchableOpacity`
  margin: 0 30px;
  height: 52px;
  background: #218EF2;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-family: "NotoSansKR_700Bold";
  font-size: 15px;
  text-align: center;
  color: #FFFFFF;
`
