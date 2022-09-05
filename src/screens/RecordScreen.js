import * as React from 'react';
import {ScrollView} from 'react-native';
import {RecordList} from "../components/RecordScreen/recordList";
import {Wrapper} from "./HomeScreen";
import {Container, Title} from "./MapScreen";

export const RecordScreen = () => {
    return <Wrapper>
        <Container>
            <Title>내 운동 정보</Title>
            <ScrollView>
                <RecordList/>
            </ScrollView>
        </Container>
    </Wrapper>
}
