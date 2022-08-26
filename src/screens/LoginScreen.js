import { StyleSheet,SafeAreaView, Pressable, Text, View } from 'react-native';
import {useState} from 'react';
import LoginInput from '../components/LoginScreen/LoginInput';
import BottomButton from '../components/LoginScreen/BottomButton';
import 'react-native-gesture-handler';

export const LoginScreen=({navigation})=>{
    const[id, setId] =useState('');
    const [pw, setPw] = useState('');

    const idHandler=(text)=>{
        setId(text)
    }

    const pwHandler=(text)=>{
        setPw(text)
    }

    return (
        <SafeAreaView style={styles.contianer}>
            <View style={styles.image}></View>
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
                  secureTextEntry={true}/>
            
            <View style={styles.signUpTextContainer}>
              <Text style={styles.signUpText}>아직 회원이 아니신가요?</Text>
              <Pressable onPress={()=>navigation.navigate('SignUp')}><Text style={[styles.signUpText, styles.signUpTextLink]}> 회원가입</Text></Pressable>
            </View>
          <BottomButton style={styles.loginButton } text={"로그인"} pressHandler={()=>navigation.navigate('TabNav')}/>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    contianer: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end'

    },
    image:{
      width:105,
      height:105,
      borderColor: 'black',
      borderWidth:2,
      borderRadius: 20,
      marginBottom: 10,
      marginTop: 134
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