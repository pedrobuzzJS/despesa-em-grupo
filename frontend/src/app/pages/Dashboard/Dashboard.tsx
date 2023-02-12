import React, { useState } from "react";
import { useRole } from "../../context/RoleContext";
import { Modal } from "../../components/Modal/Modal";
import { useSnackBar } from "../../context/snackBarContext";

export const DashBoard: React.FC = () => {
    const { funcao } = useRole();
    const [ modal, setModal ] = useState<boolean>(false);
    const { showSnackBar } = useSnackBar();

    return (
        <>
            <Modal 
                openModal={modal}
                closeModal={() => setModal(false)}
                backGroundClose
                closeOnEsc
            >
                <h1>{modal}</h1>
            </Modal>

            <button onClick={() => setModal(true)} >Abrir Modal</button>
            <button onClick={() => showSnackBar({type: "Success", message: "Hello World", callback: () => console.log("CallBack")})} >Adicionar SnackBar</button>

            <h1>PAPEL DO USUARIO = {funcao}</h1>
            <i className="ph-list"></i>
        </>
    );
}