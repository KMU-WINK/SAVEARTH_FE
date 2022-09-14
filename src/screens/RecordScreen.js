import * as React from 'react';
import {ScrollView, Text} from 'react-native';
import {RecordList} from "../components/RecordScreen/recordList";
import {Wrapper} from "./HomeScreen";
import {Container, Title} from "./MapScreen";
import {useEffect, useState} from "react";
import {getRecord} from "../axios/record";
import {getData} from "../axios/asyncStorage";

export const RecordScreen = () => {
    const [record, setRecord] = useState([]);
    useEffect( () => {
        async function fetchRecord() {
            const user_id = await getData('userInfo');
            const result = await getRecord(user_id);
            return result.data;
        }
        fetchRecord().then(r => setRecord(r));
    },[]);

    return <Wrapper>
        <Container>
            <Title>내 운동 정보</Title>
            {record === []?
                <ScrollView>
                    <RecordList records={record}/>
                </ScrollView>
                :
                <Text style={{textAlign:'center',fontSize:20, marginTop: '90%', color:'gray'}}>{'플로깅을 시작하세요! \n ᕕ( ᐛ )ᕗ'}</Text>
            }
        </Container>
    </Wrapper>
}
