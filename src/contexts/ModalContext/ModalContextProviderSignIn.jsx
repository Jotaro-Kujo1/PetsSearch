import Rect, {useState} from 'react'
import {ModalContext} from './ModalContext'
import {ModalSignIn} from '../../components';

export const ModalProviderSignIn = ({children}) => {
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
            {modalOpened && <ModalSignIn {...modalContent}/>}
            {children}
        </ModalContext.Provider>
    )

}