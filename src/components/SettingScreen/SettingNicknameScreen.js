import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import 'react-native-gesture-handler';
import  SettingTopbar from './SettingTopbar'

export const SettingNicknameScreen=({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <SettingTopbar
                text={"닉네임 변경하기"}
                pressHandler={()=>navigation.navigate('SettingMenu')}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    }
})