import Rect, {useState} from 'react'
import {ModalContext} from './ModalContext'
import {ModalChooseAvatar} from '../../components/ModalChooseAvatar';

export const ModalContextProviderChooseAvatar = ({children}) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
    }

    const valueModalProvider = {
        openModal,
        closeModal
    }
    return (
        <ModalContext.Provider value={valueModalProvider}>
            {modalOpened && <ModalChooseAvatar {...modalContent}/>}
            {children}
        </ModalContext.Provider>
    )

}