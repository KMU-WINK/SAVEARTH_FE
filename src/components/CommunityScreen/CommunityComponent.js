import * as React from 'react';
import {Button, SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import  {PostList} from "./PostList";
import {CommentList} from "./CommentList";

export const CommunityComponent = ({navigation}) => {
    return <SafeAreaView style={styles.backGround}>
        <Text style={styles.title}>커뮤니티</Text>
        <ScrollView>
            <PostList/>
            {/*<CommentList/>*/}
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: '34',
        fontWeight: 'bold',
        marginLeft: '7.5%',
        marginTop: '5%',
        marginBottom: '7%'
    },

    backGround : {
        flex: 1,
        backgroundColor: '#fff',
    }
})
