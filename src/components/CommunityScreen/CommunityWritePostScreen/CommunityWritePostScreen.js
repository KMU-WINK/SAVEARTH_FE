import {useState} from 'react';
import {StyleSheet,View, SafeAreaView,Keyboard } from 'react-native';
import CommunityTextInput from './CommunityTextInput';
import CommunityTitleInput from './CommunityTitleInput';
import CommunityButton from './CommunityButton';
import SettingTopbar from "../../SettingScreen/SettingTopbar";
import {addBoard} from "../../../axios/community";

export const CommunityWritePostScreen = ({navigation}) => {
    const [location, setLocation] = useState('');
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const onBackPress = () => {
        Keyboard.dismiss();
        navigation.navigate('CommunityBoard');
    }

    const onCompletePress = async () => {
        const result = await addBoard({
            "title": title,
            "location": location,
            "content": text,
            "like_cnt": 0,
            "comment_cnt": 0
        })
        console.log(result);
        if (result === 201) onBackPress();
        else alert("다시 시도해주세요");
    }

    return (
        <SafeAreaView style={styles.container}>
                <SettingTopbar text="커뮤니티" pressHandler={onBackPress}/>
                <View style={styles.input}>
                    <CommunityTitleInput
                        value={location}
                        placeholder={"지역을 입력해주세요"}
                        setValue={setLocation}
                    />
                    <CommunityTitleInput
                        value={title}
                        placeholder={"제목을 입력해주세요"}
                        setValue={setTitle}
                    />
                    <CommunityTextInput
                        value={text}
                        placeholder={"내용을 입력해주세요"}
                        setValue={setText}/>
                    <CommunityButton
                        text={"작성 완료하기"}
                        pressHandler={onCompletePress}/>
                </View>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
    },
    input:{
        width:344,

    }
})
