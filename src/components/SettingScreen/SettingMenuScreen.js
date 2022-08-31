import * as React from 'react';
import {StyleSheet,View, SafeAreaView, Text} from 'react-native';
import SettingMenuButton from './SettingMenuButton';
import 'react-native-gesture-handler';

export const SettingMenuScreen = ({navigation}) => {

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>설정</Text>
        </View>
        <SettingMenuButton text='닉네임 변경하기' pressHandler={()=>navigation.navigate('SettingNickname')}/>
        <SettingMenuButton text='로그아웃' pressHandler={()=>navigation.navigate('Login')}/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
    },
    textContainer:{
        // marginTop: 48
    },
    text:{
        fontFamily: 'NotoSansKR_700Bold',
        fontSize:34,
        height: 41,
        textAlign:'left',
        marginBottom:30,
        lineHeight:41,
    }
})
