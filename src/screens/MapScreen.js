import * as React from 'react';
import {StyleSheet, Button, SafeAreaView, Text, View} from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-family: 'NotoSansKR_900Black';
`
export const MapScreen = ({navigation}) => {
    return <SafeAreaView>
        <Title>지도</Title>
    </SafeAreaView>
}
