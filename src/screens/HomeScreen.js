import * as React from 'react';
import styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import * as Location from "expo-location";
import {useEffect, useState} from "react";
import {Dimensions, StyleSheet} from "react-native";
import {HomeButton} from "../components/HomeScreen/HomeButton";

export const HomeScreen = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [plogging, setPlogging] = useState(false);
    console.log(plogging);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    if(location) return <Container>
        <Title>SAVEARTH</Title>
        <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            loadingEnabled
            showsMyLocationButton={true}
            initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={styles.map}
            followUserLocation={true}
        >
        </MapView>
        {plogging?
            <HomeButton title="플로깅 종료하기" onPress={()=>setPlogging(false)}/>
            :
            <HomeButton title="플로깅 시작하기" onPress={()=>setPlogging(true)}/>
        }
    </Container>
}

const Container = styled.SafeAreaView`
  margin: 0 30px;
`
const Title = styled.Text`
  font-family: 'NotoSansKR_900Black';
  font-size: 34px;
  margin-bottom: 20px;
  color: #218EF2;
`
const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height - 300,
        marginBottom: 20,
    },
});
