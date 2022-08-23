import React, { useState,useLayoutEffect } from 'react';
import * as Location from 'expo-location';
import {StyleSheet, Dimensions} from 'react-native';
import MapView,{Marker,AnimatedRegion,Polyline,MarkerAnimated} from 'react-native-maps';
import styled from 'styled-components/native';
import {BottomModal} from "../components/MapScreen/BottomModal";

export const MapScreen = ({navigation}) => {
    const [location, setLocation] = useState(null);
    useLayoutEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            setLocation({
                latitude: location.coords.latitude, longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
            console.log(location);
        })();

    }, []);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return <Container>
        <Title onPress={toggleModal}>지도</Title>
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.map}
                showUserLocation
                followUserLocation
                loadingEnabled
                region={location}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    title={'쓰레기통 위치'}
                    description={'쓰레기통 위치'}
                />
                <Marker
                    coordinate={{
                        latitude: 37.4515580,
                        longitude: 126.7975343,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    title={'쓰레기통 위치'}
                    description={'쓰레기통 위치'}
                />
            </MapView>
            <BottomModal isModalVisible={isModalVisible}
                         toggleModal={()=>toggleModal()}
                         type="AddTrashCan" />
        </Container>
}


const Container = styled.SafeAreaView`
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
        height: Dimensions.get('window').height - 220,
    },
});
