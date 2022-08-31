import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {HomeScreen} from "./HomeScreen";
import {MapScreen} from "./MapScreen"
import {RecordScreen} from "./RecordScreen";
import {CommunityScreen} from "./CommunityScreen";
import {SettingScreen} from "./SettingScreen";
const Tab = createBottomTabNavigator();

export const MainScreen = () => {
    return <SafeAreaProvider>
            <Tab.Navigator screenOptions={{headerShown: false,tabBarShowLabel: false,
                tabBarStyle: {borderTopWidth: 0, }}}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{tabBarIcon:({focused})=>
                            (focused?<Image source ={require("../components/icon/activeHomeIcon.png")} style={styles.icon}/>
                                :<Image source ={require("../components/icon/homeIcon.png")} style={styles.icon}/>)}}
                />
                <Tab.Screen
                    name="Map"
                    component={MapScreen}
                    options={{tabBarIcon:({focused})=>
                            (focused?<Image source ={require("../components/icon/activeMapIcon.png")} style={styles.icon}/>
                                :<Image source ={require("../components/icon/mapIcon.png")} style={styles.icon}/>)}}
                />
                <Tab.Screen
                    name="Record"
                    component={RecordScreen}
                    options={{tabBarIcon:({focused})=>
                            (focused?<Image source ={require("../components/icon/activeRecordIcon.png")} style={styles.icon}/>
                                :<Image source ={require("../components/icon/recordIcon.png")} style={styles.icon}/>)}}
                />
                <Tab.Screen
                    name="Community"
                    component={CommunityScreen}
                    options={{tabBarIcon:({focused})=>
                            (focused?<Image source ={require("../components/icon/activeCommunityIcon.png")} style={styles.icon}/>
                                :<Image source ={require("../components/icon/communityIcon.png")} style={styles.icon}/>)}}
                />
                <Tab.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{tabBarIcon:({focused})=>
                            (focused?<Image source ={require("../components/icon/activeSettingIcon.png")} style={styles.icon}/>
                                :<Image source ={require("../components/icon/settingIcon.png")} style={styles.icon}/>)}}
                />
            </Tab.Navigator>
    </SafeAreaProvider>
}
const styles = StyleSheet.create({
    icon:{
        width:44,
        height:44,
        marginTop:30,
        marginBottom:10
    }
})
