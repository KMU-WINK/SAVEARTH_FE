import {ModalBtn} from "./ModalBtn";
import {TouchableOpacity} from "react-native";
import {BtnWrapper, Container, ModalTitle, SubText} from "./BottomModal";

export const AddTrashModal = ({onSubTextPress}) => {
    return <Container>
        <ModalTitle>{"해당 위치에\n 쓰레기가 많나요?"}</ModalTitle>
        <BtnWrapper>
            <ModalBtn title="제가 해결할게요" onPress={()=>console.log("제가 해결할게요")}/>
            <ModalBtn title="도움이 필요해요" full onPress={()=>console.log("도움이 필요해요")}/>
        </BtnWrapper>
        <TouchableOpacity onPress={onSubTextPress}>
            <SubText>쓰레기통 위치를 추가하고 싶으신가요?</SubText>
        </TouchableOpacity>
    </Container>
}
