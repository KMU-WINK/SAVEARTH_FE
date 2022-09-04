import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {PostList} from "../components/CommunityScreen/PostList";
import {CommentList} from "../components/CommunityScreen/CommentList";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export const CommunityScreen = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="CommunityBoard" component={PostList}/>
            <Stack.Screen name="CommunityComment" component={CommentList}/>
        </Stack.Navigator>
    )
}

