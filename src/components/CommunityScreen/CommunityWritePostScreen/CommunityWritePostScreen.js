import {useState} from 'react';
import {StyleSheet,View, SafeAreaView,Keyboard } from 'react-native';
import CommunityTopBar from './CommunityTopBar';
import CommunityTextInput from './CommunityTextInput';
import CommunityTitleInput from './CommunityTitleInput';
import CommunityButton from './CommunityButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const CommunityWritePostScreen = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const onBackPress = () => {
        Keyboard.dismiss();
        navigation.navigate('CommunityBoard');
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={onBackPress}>
                <CommunityTopBar
                    text={"커뮤니티"}
                    pressHandler={""}/>
                <View style={styles.input}>
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
                        pressHandler={""}/>
                </View>
            </TouchableWithoutFeedback>
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
