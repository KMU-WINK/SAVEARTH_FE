import {BottomModal} from "./BottomModal";
import {AddTrashModal} from "./AddTrashModal";
import {AddTrashCanModal} from "./AddTrashCanModal";
import {DelTrashModal} from "./DelTrashModal";
import {DelTrashCanModal} from "./DelTrashCanModal";

export const ShowModal = ({isModalVisible, modalType, toggleModal,
                              onAddTrashPress, onAddTrashCanPress, onDelTrashPress, onDelTrashCanPress,
                              onTrashSubPress, onTrashCanSubPress}) => {
    const SelectModal = () => {
        switch (modalType) {
            case 0: return <AddTrashModal onConfirmPress={onAddTrashPress} onCancelPress={toggleModal} onSubTextPress={onTrashSubPress}/>
            case 1: return <AddTrashCanModal onConfirmPress={onAddTrashCanPress} onCancelPress={toggleModal} onSubTextPress={onTrashCanSubPress}/>
            case 2: return <DelTrashModal onConfirmPress={onDelTrashPress} onCancelPress={toggleModal} />
            case 3: return <DelTrashCanModal onConfirmPress={onDelTrashCanPress} onCancelPress={toggleModal} />
        }
    }

    return <BottomModal isModalVisible={isModalVisible} toggleModal={() => toggleModal()}>
        <SelectModal/>
    </BottomModal>
}
