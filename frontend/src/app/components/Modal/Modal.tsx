import React, { PropsWithChildren, useRef } from "react";
import { Container, ModalBackGround, ModalCloseButton } from "./style";
import { Close } from "@styled-icons/evil";

interface IModalProps extends PropsWithChildren {
    openModal: boolean;
    closeModal: () => void;
    backGroundClose?: boolean;
}

export const Modal: React.FC<IModalProps> = ({children, openModal, closeModal, backGroundClose=false, ...props}) => {
    const backGroundRef = useRef();
    const handleBackGroundClick = (e: any) => {
        e.preventDefault();
        if ( (e.target.id != "background_modal") || (backGroundClose === false) ) return;
        closeModal();
    };

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