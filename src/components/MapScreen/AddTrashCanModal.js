import {ModalBtn} from "./ModalBtn";
import {TouchableOpacity} from "react-native";
import {BtnWrapper, Container, ModalTitle, SubText} from "./BottomModal";

export const AddTrashCanModal = ({onSubTextPress}) => {
    return <Container>
        <ModalTitle>{"해당 위치에\n 쓰레기통을 추가할까요?"}</ModalTitle>
        <BtnWrapper>
            <ModalBtn title="취소하기"/>
            <ModalBtn title="추가하기" full/>
        </BtnWrapper>
        <TouchableOpacity onPress={onSubTextPress}>
            <SubText>쓰레기 위치를 추가하고 싶으신가요?</SubText>
        </TouchableOpacity>
    </Container>
}
