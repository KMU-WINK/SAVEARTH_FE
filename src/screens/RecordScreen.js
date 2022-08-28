import * as React from 'react';
import {Button, SafeAreaView, Text, View, StyleSheet, ScrollView} from 'react-native';
import {RecordComponent} from  '../components/RecordScreen/recordComponent';
import {RecordList} from "../components/RecordScreen/recordList";

export const RecordScreen = ({navigation}) => {
    return <SafeAreaView>
        <Text style={styles.title}>내 운동 정보</Text>
        <ScrollView>
            <RecordList/>
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
})