import React, { useState,useEffect } from 'react';
import * as Location from 'expo-location';
import {StyleSheet, Dimensions} from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styled from 'styled-components/native';
import {BottomModal} from "../components/MapScreen/BottomModal";

export const MapScreen = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [modalType, setModalType] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location)
        })();
    }, []);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    if (location) return <Container>
        <Title onPress={toggleModal}>지도</Title>
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
                onPress={(e)=>{
                    console.log(e.nativeEvent.coordinate);
                    setModalType(3);
                    setModalVisible(!isModalVisible);
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
                    onPress={()=>{console.log("쓰레기 클릭")}}
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
                    onPress={()=>console.log("쓰레키통 클릭")}
                />
            </MapView>
            <BottomModal isModalVisible={isModalVisible}
                         toggleModal={()=>toggleModal()}
                         type={modalType} />
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
