import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {useState} from 'react';
import BottomButton from '../components/SignUpScreen/BottomButton';
import SignUpInput from '../components/SignUpScreen/SignUpInput'
import SignUpTopbar from '../components/SignUpScreen/SignUpTopbar';
import BirthInput from '../components/SignUpScreen/BirthInput';
import GenderInput from '../components/SignUpScreen/GenderInput';
import 'react-native-gesture-handler';

export const SignUpScreen=({navigation})=> {
  const[signUpId, setSignUpId] = useState('');
  const[signUpPw, setSignUpPw] = useState('');
  const[signUpName, setSignUpName] = useState('');
  const[signUpYear, setSignUpYear] = useState('');
  const[signUpMonth, setSignUpMonth] = useState('');
  const[signUpDay, setSignUpDay] = useState('');
  const[signUpGender, setSignUpGender] =useState('남');

  const GenderHandler=(gender)=>{
    setSignUpGender(gender)
  };
    
  const pressHandler=()=>{
    navigation.navigate('Login')
  };

    return (
      <SafeAreaView style={styles.container}>
        <SignUpTopbar
          text={"회원가입"}
          pressHandler={pressHandler}/>
          <ScrollView showsVerticalScrollIndicator={false}>
              <SignUpInput
                name={"아이디"}
                value={signUpId}
                setValue={setSignUpId}
                placeholder={"아이디를 입력해주세요"}/>
              <SignUpInput
                name={"비밀번호"}
                value={signUpPw}
                setValue={setSignUpPw}
                placeholder={"비밀번호를 입력해주세요"}/>
              <SignUpInput
                name={"닉네임"}
                value={signUpName}
                setValue={setSignUpName}
                placeholder={"닉네임를 입력해주세요"}/>
              <BirthInput
                name={"생년월일"}
                yearValue={signUpYear}
                setSignUpYear={setSignUpYear}
                monthValue={signUpMonth}
                setSignUpMonth={setSignUpMonth}
                dayValue={signUpDay}
                setSignUpDay={setSignUpDay}/>
              <GenderInput
                name={"성별"}
                selectedValue={signUpGender}
                leftValue={"남"} rightValue={"여"}
                setValue={GenderHandler}/>
          </ScrollView>
        <BottomButton
          text={"완료"} 
          pressHandler={pressHandler}/>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent: 'flex-end'
    },
  })