import { StyleSheet, SafeAreaView, View} from 'react-native';
import {useState} from 'react';
import 'react-native-gesture-handler';
import  SettingTopbar from './SettingTopbar';
import SettingNicknameInput from './SettingNicknameInput';
import BottomButton from './BottomButton';

export const SettingNicknameScreen=({navigation})=>{
    const [newNickname, setNewNickname] = useState('');

    return(
        <SafeAreaView style={styles.container}>
            <SettingTopbar
                text={"닉네임 변경하기"}
                pressHandler={()=>navigation.navigate('SettingMenu')}/>
            <SettingNicknameInput
                name={"닉네임"}
                value={newNickname}
                setValue={setNewNickname}
                placeholder={'닉네임을 입력해주세요'}/>
            <BottomButton
                text={"변경하기"}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    }
})