import {ModalBtn} from "./ModalBtn";
import {BtnWrapper, Container, ModalTitle} from "./BottomModal";

export const DelTrashModal = () => {
    return <Container>
        <ModalTitle>{"해당 위치가\n깨끗하게 변했나요?"}</ModalTitle>
        <BtnWrapper>
            <ModalBtn title="도움이 필요해요"/>
            <ModalBtn title="제가 해결했어요" full/>
        </BtnWrapper>
    </Container>
}
