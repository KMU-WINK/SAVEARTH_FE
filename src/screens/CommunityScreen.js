import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {PostList} from "../components/CommunityScreen/PostList";
import {CommentList} from "../components/CommunityScreen/CommentList";
import 'react-native-gesture-handler';
import {CommunityWritePostScreen} from "../components/CommunityScreen/CommunityWritePostScreen/CommunityWritePostScreen";

const Stack = createStackNavigator();

export const CommunityScreen = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="CommunityBoard" component={PostList}/>
            <Stack.Screen name="CommunityPost" component={CommunityWritePostScreen}/>
            <Stack.Screen name="CommunityComment" component={CommentList}/>
        </Stack.Navigator>
    )
}

