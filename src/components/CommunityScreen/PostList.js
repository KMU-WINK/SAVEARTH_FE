import {PostComponent} from "./PostComponent";
import 'react-native-gesture-handler';
import {Container, Title} from "../../screens/MapScreen";
import {Wrapper} from "../../screens/HomeScreen";
import styled from "styled-components";
import {BtnText} from "../MapScreen/ModalBtn";
import {ScrollView, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {getBoard} from "../../axios/community";
import {useIsFocused} from "@react-navigation/native";

export const PostList = ({navigation}) => {
    const [board, setBoard] = useState([]);
    const isFocused = useIsFocused();

    useEffect( () => {
        async function fetchBoard() {
            const result = await getBoard();
            return result.data;
        }
        fetchBoard().then(r => setBoard(r));
    },[isFocused]);

    return <Wrapper>
        <Container>
            <TitleContainer>
                <Title>커뮤니티</Title>
                <Button onPress={()=>navigation.navigate('CommunityPost')}>
                    <BtnText full>게시글 작성하기</BtnText>
                </Button>
            </TitleContainer>
            <ScrollView>
                {board[0]?
                    board?.reverse().map((post)=>{
                        return <PostComponent key={`Community-post-${post.id}`} content={post} navigation={navigation}/>
                    })
                    :
                    <Text style={{textAlign: 'center', fontSize: 20, marginTop: '90%', color: 'gray'}}>
                        {'첫 글의 주인공이 되어보세요!\nᕕ( ᐛ )ᕗ'}
                    </Text>
                }
                <View style={{height: 60}}/>
            </ScrollView>
        </Container>
    </Wrapper>
}

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #218EF2;
  border: 2px solid #218EF2;
  border-radius: 100px;
  width: 110px;
  height: 40px;
  margin-bottom: 20px;
`
