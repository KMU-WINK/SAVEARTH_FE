import * as React from "react";
import styled from "styled-components/native";

export const StatusView = ({time, distance}) => {
    return <StatusContainer>
        <StatusWrapper>
            <StatusTitle>운동 시간</StatusTitle>
            <StatusText>{time}</StatusText>
        </StatusWrapper>
        <StatusWrapper>
            <StatusTitle>이동 거리</StatusTitle>
            <StatusText>{distance}</StatusText>
        </StatusWrapper>
    </StatusContainer>
}


const StatusContainer = styled.View`
  position: absolute;
  bottom: 120px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const StatusWrapper = styled.View`
  background: rgba(255,255,255,0.5);
  width: 110px;
  padding: 10px;
  align-items: center;
`
const StatusTitle = styled.Text`
  font-family: NotoSansKR_100Thin;
  font-size: 14px;
`
const StatusText = styled.Text`
  font-family: NotoSansKR_500Medium;
  font-size: 17px;
`
