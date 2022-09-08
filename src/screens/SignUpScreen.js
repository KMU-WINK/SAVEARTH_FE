import { StyleSheet, ScrollView } from 'react-native';
import {useState} from 'react';
import BottomButton from '../components/SignUpScreen/BottomButton';
import SignUpInput from '../components/SignUpScreen/SignUpInput';
import BirthInput from '../components/SignUpScreen/BirthInput';
import GenderInput from '../components/SignUpScreen/GenderInput';
import 'react-native-gesture-handler';
import SettingTopbar from "../components/SettingScreen/SettingTopbar";
import {Wrapper} from "./HomeScreen";
import {Container} from "./MapScreen";
import {signup} from "../axios/user";

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

  const pressHandler = async() => {
    const result = await signup({
      nickname: signUpId,
      email: signUpId+'@'+signUpId+'com',
      name: signUpName,
      password: signUpPw,
      birth_year: signUpYear,
      birth_month: signUpMonth,
      birth_day: signUpDay,
      gender: signUpGender,
    })
    console.log(result);
    // 201: 회원가입 성공
    if (result === 201) navigation.navigate('Login');

  };

    return (
      <Wrapper>
        <Container>
          <SettingTopbar
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
              buttonControl={signUpId&& signUpPw&& signUpName&& signUpYear&& signUpMonth&& signUpDay}
              pressHandler={pressHandler}/>
        </Container>
      </Wrapper>
    );
  }
