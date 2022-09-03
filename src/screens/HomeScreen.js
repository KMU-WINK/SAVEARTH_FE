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

    useEffect(() => {
        calcDistance();
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
    }, [isStart, route]);

    const onStartPress = () => {
        setIsStart(!isStart);
        if (!isStart) {
            increment.current = setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000);
        }
        else clearInterval((increment.current));
    }

    const onStopPress = () => {
        clearInterval(increment.current)
        setIsStart(false)
        setTimer(0)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
        if (getHours === '00') return `${getMinutes}M ${getSeconds}S`
        return `${getHours}H ${getMinutes}M`
    }

    const calcDistance = () => {
        if (route.length < 2) return;
        const [...routeIndex] = [...Array(route.length - 2).keys()];
        let calc =  0;
        routeIndex.map((idx)=>{
            calc += haversine(route[idx], route[idx + 1]) || 0;
        })
        setDistance(calc.toFixed(1));
    };

    if(location) {
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
                    onPress={(e)=>setRoute([...route, e.nativeEvent.coordinate])}
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
