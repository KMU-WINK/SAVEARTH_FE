import {RecordComponent} from  './recordComponent';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

export const RecordList = () => {
    return <View style={styles.record}>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
        <RecordComponent/>
    </View>
}

const styles = StyleSheet.create({
    record: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

});