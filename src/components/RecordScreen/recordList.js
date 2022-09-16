import {RecordComponent} from  './recordComponent';
import {View} from "react-native";

export const RecordList = ({records}) => {
    return <View>
        {records?.reverse().map((record)=> {
            return <RecordComponent key={`record-${record.id}`} datetime={record.datetime} time={record.time}
                          steps={record.steps} distance={record.distance}/>
        })}
    </View>
}
