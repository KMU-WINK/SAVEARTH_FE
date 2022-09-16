import * as React from 'react';
import SettingMenuButton from './SettingMenuButton';
import 'react-native-gesture-handler';
import {Container, Title} from "../../screens/MapScreen";
import {Wrapper} from "../../screens/HomeScreen";

export const SettingMenuScreen = ({navigation}) => {

    return (
    <Wrapper>
        <Container>
            <Title>설정</Title>
            {/*<SettingMenuButton text='닉네임 변경하기' pressHandler={()=>navigation.navigate('SettingNickname')}/>*/}
            <SettingMenuButton text='로그아웃' pressHandler={()=>navigation.navigate('Login')}/>
        </Container>
    </Wrapper>
    );
}
