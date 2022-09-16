import {ModalBtn} from "./ModalBtn";
import {BtnWrapper, Container, ModalTitle} from "./BottomModal";

export const DelTrashModal = ({onConfirmPress, onCancelPress}) => {
    return <Container>
        <ModalTitle>{"해당 위치가\n깨끗하게 변했나요?"}</ModalTitle>
        <BtnWrapper>
            <ModalBtn title="도움이 필요해요" onPress={onCancelPress}/>
            <ModalBtn title="제가 해결했어요" full onPress={onConfirmPress}/>
        </BtnWrapper>
    </Container>
}
