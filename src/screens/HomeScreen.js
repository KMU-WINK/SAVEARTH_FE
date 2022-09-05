import * as React from 'react';
import styled from 'styled-components/native';
import MapView, {Polyline, PROVIDER_GOOGLE} from "react-native-maps";
import * as Location from "expo-location";
import {useEffect, useRef, useState} from "react";
import {Dimensions, StyleSheet} from "react-native";
import {HomeButton} from "../components/HomeScreen/HomeButton";
import {StatusView} from "../components/HomeScreen/StatusView";
const haversine = require('haversine')

export const HomeScreen = () => {
    const [location, setLocation] = useState({});
    const [isStart, setIsStart] = useState(false);
    const [distance, setDistance] = useState(0);
    const [timer, setTimer] = useState(0);
    const [route, setRoute] = useState([]);
    const increment = useRef(null);
    const realtime = useRef(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;
            let current = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: current.coords.latitude,
                longitude: current.coords.longitude,
                latitudeDelta: 0.01913125548428951,
                longitudeDelta: 0.014162063598647023,
            });
        })();
    }, []);


    const onStartPress = () => {
        setIsStart(!isStart);
        Location.watchPositionAsync({accuracy: Location.Accuracy.Balanced}, position => {
            const currentLat = position.coords.latitude;
            const currentLon = position.coords.longitude;
            const current = {latitude: currentLat, longitude: currentLon};
            setRoute(route => {
                return [...route, current]
            });
        });
        increment.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        realtime.current = setInterval(async() => {
            await Location.watchPositionAsync({accuracy: Location.Accuracy.Balanced}, position => {
                const currentLat = position.coords.latitude;
                const currentLon = position.coords.longitude;
                const current = {latitude: currentLat, longitude: currentLon};
                setRoute(route => {
                    const prevDistance = haversine(route[route.length-1], current) || 0;
                    setDistance((distance+prevDistance).toFixed(1));
                    return [...route, current]
                });
            });
        }, 3000);
    }

    const onStopPress = () => {
        clearInterval(increment.current);
        clearInterval(realtime.current);
        setIsStart(false);
        setTimer(0);
        setRoute([]);
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
        if (getHours === '00') return `${getMinutes}M ${getSeconds}S`
        return `${getHours}H ${getMinutes}M`
    }

    if(location.latitude !== undefined) {
        return <Wrapper>
            <Container>
                <Title>SAVEARTH</Title>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    loadingEnabled
                    showsMyLocationButton={true}
                    initialRegion={location}
                    style={styles.map}
                    followUserLocation={true}
                    onPress={(e)=> {
                        setRoute([...route, e.nativeEvent.coordinate]);
                    }}
                >
                    {isStart && <Polyline coordinates={route} strokeWidth={5}/>}
                </MapView>
                {isStart && <StatusView time={formatTime()} distance={distance+"KM"}/>}
                <HomeButton
                    title={isStart?"플로깅 종료하기":"플로깅 시작하기"}
                    onPress={isStart?onStopPress:onStartPress}
                />
            </Container>
        </Wrapper>
    }
}
export const Wrapper = styled.SafeAreaView`
  background: #fff;
  width: 100%;
  height: 100%;
`
const Container = styled.SafeAreaView`
  margin: 0 30px;
`
const Title = styled.Text`
  font-family: NotoSansKR_900Black;
  font-size: 34px;
  margin-bottom: 20px;
  color: #218EF2;
`
const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height - 280,
        marginBottom: 20,
        position: "relative",
    },
});
