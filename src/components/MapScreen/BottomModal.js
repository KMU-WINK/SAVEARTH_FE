import {Dimensions, StyleSheet} from "react-native";
import Modal from "react-native-modal";
import styled from 'styled-components/native';

export const BottomModal = ({isModalVisible, children, toggleModal}) => {
    return <Modal
            onBackdropPress={()=>toggleModal()}
            isVisible={isModalVisible}
            style={styles.bottomModal}
        >
        {children}
    </Modal>
}

const styles = StyleSheet.create({
    bottomModal: {
        minHeight: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width,
        position: "absolute",
        bottom : -20,
        margin: 0,
        borderTopColor: "black",
        backgroundColor: "white",
    },
});

export const Container = styled.View`
  padding: 40px 20px 50px;
`
export const ModalTitle = styled.Text`
  font-family: NotoSansKR_700Bold;
  font-size: 34px;
  line-height: 41px;
  text-align: center;
`
export const BtnWrapper = styled.View`
  margin: 30px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const SubText = styled.Text`
  margin: 16px 0 0;
  font-family: 'NotoSansKR_400Regular';
  text-align: center;
  text-decoration-line: underline;
  color: #787878;
`
