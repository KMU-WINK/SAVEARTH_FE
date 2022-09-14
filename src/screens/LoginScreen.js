import {StyleSheet, SafeAreaView, Pressable, Text, View, ImageBackground} from 'react-native';
import {useState} from 'react';
import LoginInput from '../components/LoginScreen/LoginInput';
import BottomButton from '../components/LoginScreen/BottomButton';
import 'react-native-gesture-handler';
import {login} from "../axios/user";

export const LoginScreen=({navigation})=>{
    const[id, setId] =useState('');
    const [pw, setPw] = useState('');
    const [error, setError] = useState('');

    const idHandler=(text)=>{
        setId(text)
    }

    const pwHandler=(text)=>{
        setPw(text)
    }

    const onLoginPress = async() => {
        const result = await login({
            username:id,
            password:pw
        })
        console.log(result);
        // 202 : 로그인 성공 , 403 : csrf 토큰 값 없음 , 400 : 아이디, 비밀번호 불일치
        if (result === 202) navigation.navigate('MainScreen');
        else if (result === 400) setError("아이디 또는 비밀번호가 일치하지 않습니다.");
        else setError("예상치 못한 오류가 발생했습니다.\n잠시후 다시 시도해주세요.")
    }

    return (
        <SafeAreaView style={styles.container}>
            {/*<View style={styles.imageWrapper}>*/}
                <ImageBackground style={styles.imageWrapper} source={require('../components/LoginScreen/savearth_icon.jpeg')}/>
            {/*</View>*/}
            <Text style={styles.title}>SAVEARTH</Text>

              <LoginInput
                  name={"아이디"}
                  value={id}
                  setValue={idHandler}
                  placeholder={"아이디를 입력해주세요"}/>
              <LoginInput
                  name={"비밀번호"}
                  value={pw}
                  setValue={pwHandler}
                  placeholder={"비밀번호를 입력해주세요"}
                  // secureTextEntry={true}
                  errorMessage={error}
              />

            <View style={styles.signUpTextContainer}>
              <Text style={styles.signUpText}>아직 회원이 아니신가요?</Text>
              <Pressable onPress={()=>navigation.navigate('SignUp')}><Text style={[styles.signUpText, styles.signUpTextLink]}> 회원가입</Text></Pressable>
            </View>
            <BottomButton
              style={styles.loginButton }
              text={"로그인"}
              pressHandler={onLoginPress}
              buttonControl={id&&pw}/>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end'

    },
    imageWrapper:{
      width:105,
      height:105,
      // borderColor: 'black',
      // borderWidth:2,
      // borderRadius: 20,
      marginBottom: 10,
      marginTop: 134,

    },
    title:{
      fontWeight: 'bold',
      fontSize: 34,
      marginBottom:51,
      fontFamily: 'NotoSansKR_700Bold',
      color: '#218EF2',
      height: 41

    },
    signUpTextContainer:{
      flexDirection:'row',
      marginTop:24,
      marginBottom: 59,
      height: 22,
    },
    signUpText:{
      fontSize:13,
      fontFamily: 'NotoSansKR_400Regular',
      color:'#797979',
    },
    signUpTextLink:{
      textDecorationLine: 'underline'
    },
    loginButton:{
      justifyContent: 'flex-end'
    }
  });
