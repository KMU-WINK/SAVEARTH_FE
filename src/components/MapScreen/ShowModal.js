import {BottomModal} from "./BottomModal";
import {AddTrashModal} from "./AddTrashModal";
import {DelTrashModal} from "./DelTrashModal";
import {DelTrashCanModal} from "./DelTrashCanModal";

export const ShowModal = ({isModalVisible, modalType, toggleModal}) => {
    const SelectModal = () => {
        switch (modalType) {
            case 0: return <AddTrashModal/>
            case 2: return <DelTrashModal/>
            case 3: return <DelTrashCanModal/>
        }
    }

    return <BottomModal isModalVisible={isModalVisible} toggleModal={() => toggleModal()}>
        <SelectModal/>
    </BottomModal>
}
