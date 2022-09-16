import React, { useState,useEffect } from 'react';
import * as Location from 'expo-location';
import {StyleSheet, Dimensions} from 'react-native';
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styled from 'styled-components/native';
import {Wrapper} from "./HomeScreen";
import {ShowModal} from "../components/MapScreen/ShowModal";
import {addTrashCan, delTrashCan, getTrashCan} from "../axios/trashcan";
import {addTrash, delTrash, getTrash} from "../axios/trash";
import {ModalBtn} from "../components/MapScreen/ModalBtn";

export const MapScreen = () => {
    const [location, setLocation] = useState({});
    const [modalType, setModalType] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [trash, setTrash] = useState([]);
    const [trashCan, setTrashCan] = useState([]);
    const [info, setInfo] = useState();
    const [refresh, setRefresh] = useState(false);

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
    }, [refresh]);

    useEffect( () => {
        async function fetchTrashCan() {
            const result = await getTrashCan();
            return result.data;
        }
        async function fetchTrash() {
            const result = await getTrash();
            return result.data;
        }
        fetchTrashCan().then(r => setTrashCan(r));
        fetchTrash().then(r=>setTrash(r));
    },[refresh]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const onAddTrash = async(loc) => {
        const result = await addTrash({
            trash_x: loc.latitude,
            trash_y: loc.longitude,
        })
        if (result === 201) alert('쓰레기 마크 추가 성공');
        else {
            alert('잠시후 다시 시도해주세요');
        }
        toggleModal();
    }
    const onAddTrashCan = async (loc) => {
        const result = await addTrashCan({
            trashcan_x: loc.latitude,
            trashcan_y: loc.longitude,
        })
        if (result === 201) alert('쓰레기통 마크 추가 성공');
        else alert('잠시후 다시 시도해주세요');
        toggleModal();
    }
    const onDelTrash = async (id) => {
        const result = await delTrash(id);
        if (result === 204) alert('쓰레기 삭제 성공');
        else alert('잠시후 다시 시도해주세요');
        toggleModal();
    }
    const onDelTrashCan = async (id) => {
        const result = await delTrashCan(id);
        if (result === 204) alert('쓰레기통 삭제 성공');
        else alert('잠시후 다시 시도해주세요');
        toggleModal();
    }

    if (location.latitude !== undefined) {
        return <Wrapper>
            <Container>
                <TitleContainer>
                    <Title>지도</Title>
                    <ModalBtn full title="새로고침" w={80} h={40} onPress={()=>setRefresh(!refresh)}/>
                </TitleContainer>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    loadingEnabled
                    showsMyLocationButton={true}
                    initialRegion={location}
                    style={styles.map}
                    followUserLocation={true}
                    onPress={(e) => {
                        if (e.nativeEvent.action !== 'marker-press') {
                            setModalType(0);
                            setInfo(e.nativeEvent.coordinate);
                        }
                        setModalVisible(!isModalVisible);
                    }}
                >
                    {trash?.map((res)=> {
                        return <Marker
                            key={`trash-${res.id}`}
                            coordinate={{latitude:res.trash_x, longitude:res.trash_y}}
                            image="https://user-images.githubusercontent.com/54919662/186675058-62988681-ae0c-4d03-aaa2-7ed19af31b97.png"
                            title='쓰레기 위치'
                            onPress={() => {
                                setModalType(2);
                                setInfo(res.id);
                            }}
                        />
                    })}
                    {trashCan?.map((res)=> {
                        return <Marker
                            key={`trashcan-${res.id}`}
                            coordinate={{latitude:res.trashcan_x, longitude:res.trashcan_y}}
                            image="https://user-images.githubusercontent.com/54919662/186675229-b2e73f22-d989-4290-8204-0c38fa38ed88.png"
                            title='쓰레기통 위치'
                            onPress={() => {
                                setModalType(3);
                                setInfo(res.id);
                            }}
                        />
                    })}
                </MapView>
            </Container>
            <ShowModal isModalVisible={isModalVisible} modalType={modalType} toggleModal={toggleModal}
                       onAddTrashPress={()=>onAddTrash(info)} onAddTrashCanPress={()=>onAddTrashCan(info)}
                       onDelTrashPress={()=>onDelTrash(info)} onDelTrashCanPress={()=>onDelTrashCan(info)}
                       onTrashSubPress={()=> setModalType(1)} onTrashCanSubPress={()=> setModalType(0)}
            />
        </Wrapper>
    }
}

export const Container = styled.View`
  margin: 0 30px;
`
export const Title = styled.Text`
  font-family: NotoSansKR_900Black;
  font-size: 34px;
  margin-bottom: 20px;
`
const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
