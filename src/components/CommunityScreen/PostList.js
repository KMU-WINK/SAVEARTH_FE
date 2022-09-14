import {PostComponent} from "./PostComponent";
import 'react-native-gesture-handler';
import {Container, Title} from "../../screens/MapScreen";
import {Wrapper} from "../../screens/HomeScreen";
import styled from "styled-components";
import {ModalBtn} from "../MapScreen/ModalBtn";
import {ScrollView} from "react-native";
import {useEffect, useState} from "react";
import {getBoard} from "../../axios/community";

export const PostList = ({navigation}) => {
    const [board, setBoard] = useState([]);

    useEffect( () => {
        async function fetchBoard() {
            const result = await getBoard();
            return result.data;
        }
        fetchBoard().then(r => setBoard(r));
    },[]);

    return <Wrapper>
        <Container>
            <TitleContainer>
                <Title>커뮤니티</Title>
                <ModalBtn full title="게시글 작성하기" w={110} h={40} onPress={()=>navigation.navigate('CommunityPost')}/>
            </TitleContainer>
            <ScrollView>
                {board?.map((post)=>{
                    return <PostComponent key={`Community-post-${post.id}`} content={post} navigation={navigation}/>
                })}
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
