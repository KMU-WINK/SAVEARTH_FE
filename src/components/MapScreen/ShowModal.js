import {BottomModal} from "./BottomModal";
import {AddTrashModal} from "./AddTrashModal";
import {AddTrashCanModal} from "./AddTrashCanModal";
import {DelTrashModal} from "./DelTrashModal";
import {DelTrashCanModal} from "./DelTrashCanModal";

export const ShowModal = ({isModalVisible, modalType, toggleModal, onTrashSubPress, onTrashCanSubPress}) => {
    const SelectModal = () => {
        switch (modalType) {
            case 0: return <AddTrashModal onSubTextPress={onTrashSubPress}/>
            case 1: return <AddTrashCanModal onSubTextPress={onTrashCanSubPress}/>
            case 2: return <DelTrashModal/>
            case 3: return <DelTrashCanModal/>
        }
    }

    return <BottomModal isModalVisible={isModalVisible} toggleModal={() => toggleModal()}>
        <SelectModal/>
    </BottomModal>
}
