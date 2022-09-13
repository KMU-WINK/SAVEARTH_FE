import * as React from 'react';
import {ScrollView} from 'react-native';
import {RecordList} from "../components/RecordScreen/recordList";
import {Wrapper} from "./HomeScreen";
import {Container, Title} from "./MapScreen";
import {useEffect, useState} from "react";
import {getRecord} from "../axios/record";

export const RecordScreen = () => {
    const [record, setRecord] = useState([]);
    useEffect( () => {
        async function fetchRecord() {
            const result = await getRecord(5);
            console.log(result.data);
            return result.data;
        }
        fetchRecord().then(r => setRecord(r));
    },[]);

    return <Wrapper>
        <Container>
            <Title>내 운동 정보</Title>
            <ScrollView>
                <RecordList records={record}/>
            </ScrollView>
        </Container>
    </Wrapper>
}
