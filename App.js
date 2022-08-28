import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFonts,
        NotoSansKR_100Thin, NotoSansKR_300Light,
        NotoSansKR_400Regular, NotoSansKR_500Medium,
        NotoSansKR_700Bold, NotoSansKR_900Black} from '@expo-google-fonts/noto-sans-kr';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

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
      <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel: false, 
        tabBarStyle: {height:64, borderTopWidth: 0, }}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen} 
          options={{tabBarIcon:({focused})=>
          (focused?<Image source ={require("./src/components/icon/activeHomeIcon.png")} style={styles.icon}/>
          :<Image source ={require("./src/components/icon/homeIcon.png")} style={styles.icon}/>)}}
          />
        <Tab.Screen
          name="Map"      
          component={MapScreen}
          options={{tabBarIcon:({focused})=>
          (focused?<Image source ={require("./src/components/icon/activeMapIcon.png")} style={styles.icon}/>
           :<Image source ={require("./src/components/icon/mapIcon.png")} style={styles.icon}/>)}}
          />      
        <Tab.Screen
          name="Record" 
          component={RecordScreen}
          options={{tabBarIcon:({focused})=>
          (focused?<Image source ={require("./src/components/icon/activeRecordIcon.png")} style={styles.icon}/>
          :<Image source ={require("./src/components/icon/recordIcon.png")} style={styles.icon}/>)}}
          />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{tabBarIcon:({focused})=>
          (focused?<Image source ={require("./src/components/icon/activeCommunityIcon.png")} style={styles.icon}/>
          :<Image source ={require("./src/components/icon/communityIcon.png")} style={styles.icon}/>)}}
          />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{tabBarIcon:({focused})=>
          (focused?<Image source ={require("./src/components/icon/activeSettingIcon.png")} style={styles.icon}/>
          :<Image source ={require("./src/components/icon/settingIcon.png")} style={styles.icon}/>)}}
          />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
}
const styles = StyleSheet.create({
  icon:{
      width:44,
      height:44,
      marginTop:10,
      marginBottom:10
  }
})