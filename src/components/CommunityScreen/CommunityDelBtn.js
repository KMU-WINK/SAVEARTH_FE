import styled from "styled-components/native";

export const CommunityDelBtn = ({title, full}) => {
    return <Button full={full}>
        <BtnText full={full}>{title}</BtnText>
    </Button>
}

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100px;
  width: 20px;
  height: 20px;
  margin-right: 5%;
`
const BtnText = styled.Text`
  font-family: 'NotoSansKR_700Bold';
  text-align: center;
  font-size: 10pt;
  //color: ${props=>props.full? "#FFFFFF":"#218EF2"};
  color: white;
`

