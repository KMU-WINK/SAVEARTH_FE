import React, { useState,useEffect } from 'react';
import * as Location from 'expo-location';
import {StyleSheet, Dimensions} from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styled from 'styled-components/native';
import {Wrapper} from "./HomeScreen";
import {ShowModal} from "../components/MapScreen/ShowModal";
export const MapScreen = () => {
    const [location, setLocation] = useState({});
    const [modalType, setModalType] = useState(0);
    const [isMarker, setIsMarker] = useState(false);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;
            let current = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: current.coords.latitude,
                longitude: current.coords.longitude,
                latitudeDelta: 0.02150291932775872,
                longitudeDelta: 0.014162063598647023,
            });
        })();
    }, []);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        // setIsMarker(false);
    };

    if (location) {
        return <Wrapper>
            <Container>
                <Title>지도</Title>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    loadingEnabled
                    showsMyLocationButton={true}
                    initialRegion={location}
                    style={styles.map}
                    onRegionChangeComplete={reg => console.log("지역", reg)}
                    followUserLocation={true}
                    onPress={(e) => {
                        console.log(e.nativeEvent.coordinate);
                        if (!isMarker) setModalType(0);
                        setModalVisible(!isModalVisible);
                        console.log(isModalVisible)
                        // const newTrashLocation=e.nativeEvent.coordinate;
                        // const trashLocations =this.state.trashLocations; //기존 쓰레기통 위치들
                        // this.setState({trashLocations:[...trashLocations,newTrashLocation]})
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78679,
                            longitude: -122.40817,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        image="https://user-images.githubusercontent.com/54919662/186675058-62988681-ae0c-4d03-aaa2-7ed19af31b97.png"
                        title={'쓰레기 위치'}
                        description={'쓰레기 위치'}
                        onPress={(e) => {
                            setModalType(2);
                            setIsMarker(true);
                            setModalVisible(!isModalVisible);
                        }}
                    />
                    <Marker
                        coordinate={{
                            latitude: 37.787139,
                            longitude: -122.405851,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        image="https://user-images.githubusercontent.com/54919662/186675229-b2e73f22-d989-4290-8204-0c38fa38ed88.png"
                        title={'쓰레기통 위치'}
                        description={'쓰레기통 위치'}
                        onPress={(e) => {
                            setModalType(3);
                            setIsMarker(true);
                            setModalVisible(!isModalVisible);
                        }}
                    />
                </MapView>
            </Container>
            <ShowModal isModalVisible={isModalVisible} modalType={modalType} toggleModal={toggleModal}/>
        </Wrapper>
    }
}

const Container = styled.View`
  margin: 0 30px;
`
const Title = styled.Text`
  font-family: 'NotoSansKR_900Black';
  font-size: 34px;
  margin-bottom: 20px;
`
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').height - 210,
    },
});
