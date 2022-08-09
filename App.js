import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./src/screens/HomeScreen";
import {MapScreen} from "./src/screens/MapScreen"
import {RecordScreen} from "./src/screens/RecordScreen";
import {CommunityScreen} from "./src/screens/CommunityScreen";
import {SettingScreen} from "./src/screens/SettingScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Map" component={MapScreen}/>
          <Tab.Screen name="Record" component={RecordScreen}/>
          <Tab.Screen name="Community" component={CommunityScreen}/>
          <Tab.Screen name="Setting" component={SettingScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  </SafeAreaProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
