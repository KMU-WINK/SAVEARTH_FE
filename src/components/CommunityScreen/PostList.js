import {PostComponent} from "./PostComponent";
import {StyleSheet, Text, View} from 'react-native';
import {CommentList} from "./CommentList"; // 게시글 상세 화면

import {createStackNavigator, StackView} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import StackNav from "./StackNav"; //게시글과 상세 화면에 대한 네비게이션

// const Tab = createBottomTabNavigator();

// function home() { // 에러 해결을 위한 함수 (navigation nested error 뜸)
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name="post" component={PostComponent}/>
//             <Tab.Screen name="com" component={CommentComponent}/>
//         </Tab.Navigator>
//     )
// }

// const Stack = createStackNavigator();
export const PostList = () => {
    // return ( // 게시글 눌렀을 때 상세 화면으로 넘기기
    //     <NavigationContainer>
    //         {/*<StackNav/>*/}
    //         <Stack.Navigator>
    //             <Stack.Screen name="post" component={home}/>
    //             {/*<Stack.Screen name="comment" component={CommentComponent}/>*/}
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // )
    return <View style={styles.record}>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        <PostComponent/>
        {/*<CommentList/>*/}
    </View>

}

const styles = StyleSheet.create({
    record: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    select: {
        width: "10%",
        color: "red"

    }
});

// dropdown
// import SelectDropdown from  'react-native-select-dropdown';
{/*<SelectDropdown*/}
{/*    style={styles.select}*/}
{/*    data = {regions}*/}
{/*    onSelect={(selectedItem, index) => {*/}
{/*        console.log(selectedItem, index)*/}
{/*    }}*/}
{/*    buttonTextAfterSelection={(selectedItem, index) => {*/}
{/*        return selectedItem*/}
{/*    }}*/}
{/*    rowTextForSelection={(item, index) => {*/}
{/*    }}*/}
{/*    defaultButtonText={"지역"}*/}
{/*    // defaultValueByIndex={0}*/}
