import React, { useState } from "react";
import { useRole } from "../../context/RoleContext";
import { Separator } from "./style";
import { Modal } from "../../components/Modal/Modal";

export const DashBoard: React.FC = () => {
    const { funcao } = useRole();
    const [ modal, setModal ] = useState<boolean>(false);

    return (
        <>
            <Modal 
                openModal={modal}
                closeModal={() => setModal(false)}
                closeOnEsc
            >
                <h1>{modal}</h1>
            </Modal>
            <button onClick={() => setModal(true)} >Abrir Modal</button>
            <h1>PAPEL DO USUARIO = {funcao}</h1>
            <i className="ph-list"></i>
        </>
    );
}