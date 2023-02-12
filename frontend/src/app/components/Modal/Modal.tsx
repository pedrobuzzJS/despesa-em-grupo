import React, { PropsWithChildren, useRef, useEffect } from "react";
import { Container, ModalBackGround, ModalCloseButton } from "./style";
interface IModalProps extends PropsWithChildren {
    openModal: boolean;
    closeModal: () => void;
    backGroundClose?: boolean;
    closeOnEsc?: boolean;
    onBeforeOpen?: () => void;
    onAfterOpen?: () => void;
    onBeforeClose?: () => void;
    onAfterClose?: () => void;
};

const ESC_KEY = 27;

export const Modal: React.FC<IModalProps> = ({children, openModal, closeModal, backGroundClose=false, closeOnEsc=false, ...props}) => {
    const handleBackGroundClick = (e: any) => {
        e.preventDefault();
        if ( (e.target.id != "background_modal") || (backGroundClose === false) ) return;
        closeModal();
    };

    const handleKeyUp = (e: any): any => {
        if (e.keyCode === ESC_KEY) {
            closeModal();
            return window.removeEventListener('keydown', handleKeyUp);
        }
        return;
    };

    useEffect(() => {
        if (closeOnEsc && openModal === true) {
            window.addEventListener('keydown', handleKeyUp);
        }
    }, [openModal]);

    return (
        <>
            {openModal && openModal === true ?
                <>
                    <ModalBackGround
                        id="background_modal"
                        onClick={handleBackGroundClick}
                    >
                        <Container>
                            <ModalCloseButton 
                                onClick={closeModal}
                            />
                            {children}
                        </Container>
                    </ModalBackGround>
                </>
            : <></>
            }
        </>
    );
};