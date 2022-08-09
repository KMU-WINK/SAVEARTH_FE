import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts,
        NotoSansKR_100Thin, NotoSansKR_300Light,
        NotoSansKR_400Regular, NotoSansKR_500Medium,
        NotoSansKR_700Bold, NotoSansKR_900Black} from '@expo-google-fonts/noto-sans-kr';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen} from "./src/screens/HomeScreen";
import {MapScreen} from "./src/screens/MapScreen"
import {RecordScreen} from "./src/screens/RecordScreen";
import {CommunityScreen} from "./src/screens/CommunityScreen";
import {SettingScreen} from "./src/screens/SettingScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansKR_100Thin, NotoSansKR_300Light, NotoSansKR_400Regular,
    NotoSansKR_500Medium, NotoSansKR_700Bold, NotoSansKR_900Black
  });

  if (!fontsLoaded) return null;
  return <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Map" component={MapScreen}/>
        <Tab.Screen name="Record" component={RecordScreen}/>
        <Tab.Screen name="Community" component={CommunityScreen}/>
        <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
}
