import {PostComponent} from "./PostComponent";
import 'react-native-gesture-handler';
import {Container, Title} from "../../screens/MapScreen";
import {Wrapper} from "../../screens/HomeScreen";
import styled from "styled-components";
import {ModalBtn} from "../MapScreen/ModalBtn";
import {ScrollView} from "react-native";

export const PostList = ({navigation}) => {
    return <Wrapper>
        <Container>
            <TitleContainer>
                <Title>커뮤니티</Title>
                <ModalBtn full title="게시글 작성하기" w={110} h={40} onPress={()=>navigation.navigate('CommunityPost')}/>
            </TitleContainer>
            <ScrollView>
                {[0, 1, 2, 3, 4].map((index)=>{
                    return <PostComponent key={`Community-post-${index}`} navigation={navigation}/>
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
// dropdown
// import SelectDropdown from  'react-native-select-dropdown';
{/*<SelectDropdown*/}
{/*    style={styles.select}*/}
{/*    data = {regions}*/}
{/*    onSelect={(selectedItem, index) => {*/}
{/*        console.log(selectedItem, index)*/}
{/*    }}*/}
{/*    buttonTextAfterSelection={(selectedItem, index) => {*/}
{/*        return selectedItem*/}
{/*    }}*/}
{/*    rowTextForSelection={(item, index) => {*/}
{/*    }}*/}
{/*    defaultButtonText={"지역"}*/}
{/*    // defaultValueByIndex={0}*/}
