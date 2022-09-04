import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {PostComponent} from "./PostComponent";
import {CommentComponent} from "./CommentComponent";

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="post" component={PostComponent}/>
            <Stack.Screen name="comment" component={CommentComponent}/>
        </Stack.Navigator>
    )
}

export default StackNav;