import {RecordComponent} from  './recordComponent';
import {View} from "react-native";

export const RecordList = ({records}) => {
    return <View>
        {records?.map((record)=> {
            return <RecordComponent endTime={record.endtime} startTime={record.starttime}
                          steps={record.steps} distance={record.distance}/>
        })}
    </View>
}
