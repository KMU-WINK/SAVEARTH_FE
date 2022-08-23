import {ModalBtn} from "./ModalBtn";
import {BtnWrapper, Container, ModalTitle} from "./BottomModal";

export const DelTrashCanModal = () => {
    return <Container>
        <ModalTitle>{"해당 위치에\n 쓰레기통이 없나요?"}</ModalTitle>
        <BtnWrapper>
            <ModalBtn title="쓰레기통이 있어요"/>
            <ModalBtn title="쓰레기통이 없어요" full/>
        </BtnWrapper>
    </Container>
}
