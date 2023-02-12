import React, { useState } from "react";
import { GridSysten } from "../../components/GridLayout/Grid/Grid";
import { Modal } from "../../components/Modal/Modal";
import { useRole } from "../../context/RoleContext";
import { useSnackBar } from "../../context/snackBarContext";
import { Box } from "./LittleBox"

export const HomePage: React.FC = () => {
    const { funcao } = useRole();
    const [ modal, setModal ] = useState<boolean>(false);
    const { showSnackBar } = useSnackBar();

    return (
        <>
            <GridSysten container>
                <GridSysten item cols={6}>
                    <Box>
                        <h1>BOX</h1>
                    </Box>
                </GridSysten>
                <GridSysten item cols={4}>
                    <Box>
                        <h1>BOX</h1>
                    </Box>
                </GridSysten>
                <GridSysten item cols={2}>
                    <Box>
                        <h1>BOX</h1>
                    </Box>
                </GridSysten>
                <GridSysten item cols={12}>
                    <Box>
                        <h1>BOX</h1>
                    </Box>
                </GridSysten>
            </GridSysten>
            <Modal 
                openModal={modal}
                closeModal={() => setModal(false)}
                // backGroundClose
                // closeOnEsc
            >
                <h1>{modal}</h1>
            </Modal>

            <button onClick={() => setModal(true)} >Abrir Modal</button>
            <button onClick={() => showSnackBar({type: "Success", message: "Hello World", callback: () => console.log("CallBack")})} >Adicionar SnackBar</button>

            <h1>PAPEL DO USUARIO = {funcao}</h1>
            <i className="ph-list"></i>
        </>
    );
};