import {PostComponent} from "./PostComponent";
import 'react-native-gesture-handler';
import {Container, Title} from "../../screens/MapScreen";
import {Wrapper} from "../../screens/HomeScreen";
import styled from "styled-components";
import {ModalBtn} from "../MapScreen/ModalBtn";
import {ScrollView, View} from "react-native";
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
                <ModalBtn full title="게시글 작성하기" w={110} h={40} onPress={()=>navigation.navigate('CommunityPost')}/>
            </TitleContainer>
            <ScrollView>
                {board?.reverse().map((post)=>{
                    return <PostComponent key={`Community-post-${post.id}`} content={post} navigation={navigation}/>
                })}
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
