import {useState} from 'react';
import 'react-native-gesture-handler';
import  SettingTopbar from './SettingTopbar';
import SettingNicknameInput from './SettingNicknameInput';
import BottomButton from './BottomButton';
import {Wrapper} from "../../screens/HomeScreen";
import {Container} from "../../screens/MapScreen";

export const SettingNicknameScreen=({navigation})=>{
    const [newNickname, setNewNickname] = useState('');

    return <Wrapper>
        <Container>
            <SettingTopbar
                text={"닉네임 변경하기"}
                pressHandler={()=>navigation.navigate('SettingMenu')}/>
            <SettingNicknameInput
                name={"닉네임"}
                value={newNickname}
                setValue={setNewNickname}
                placeholder={'닉네임을 입력해주세요'}/>
            <BottomButton text={"변경하기"} pressHandler={()=>console.log("버튼 클릭")}/>
        </Container>
    </Wrapper>
}
