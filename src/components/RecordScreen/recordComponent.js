import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';

export const RecordComponent = ({datetime, time, distance, steps}) => {
    Moment.locale('ko');

    return <View style={styles.recordBox}>
        <View style={styles.upperBox}>
            <Text style={styles.recordDate}> {Moment(datetime).format('YY.MM.DD')} </Text>
            <Text style={styles.recordTime}> {Moment(datetime).format('hh:mm')} </Text>
        </View>
        <View style={styles.downBox}>
            <View style={styles.recordInfoBox}>
                <Text style={styles.recordTitle}>운동 시간</Text>
                <Text style={styles.recordInfo}>{time}</Text>
            </View>
            <View style={styles.recordInfoBox}>
                <Text style={styles.recordTitle}>이동 거리</Text>
                <Text style={styles.recordInfo}>{distance}KM</Text>
            </View>
            <View style={styles.recordInfoBox}>
                <Text style={styles.recordTitle}>걸음 수</Text>
                <Text style={styles.recordInfo}>{steps? steps:'-'}</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    recordBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '20px',
        borderStyle: 'solid',
        marginBottom: 20,
    },
    recordDate: {
        fontSize: '17',
        fontWeight: 'bold'
    },
    recordTime: {
        fontSize: '10',
    },
    upperBox: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingTop: '5%',
        alignItems: 'center'

    },
    downBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5% 8% 5% 8%'

    },
    recordInfoBox: {
        width: '30%',
        // borderWidth: 1,
        // borderColor: 'black',
        // borderRadius: '20px',
        // borderStyle: 'solid',
        textAlign: 'center',

    },
    recordTitle: {
        fontSize: '14',
        color: 'gray',
        textAlign: 'center',
    },
    recordInfo: {
        fontSize: '17',
        textAlign: 'center',
    }
});
