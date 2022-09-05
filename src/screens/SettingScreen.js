 import * as React from 'react';
import {SettingMenuScreen} from '../components/SettingScreen/SettingMenuScreen';
import {SettingNicknameScreen} from '../components/SettingScreen/SettingNicknameScreen';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export const SettingScreen = () => {
    return (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SettingMenu" component={SettingMenuScreen}/>
            <Stack.Screen name="SettingNickname" component={SettingNicknameScreen}/>
          </Stack.Navigator>
    )
}
