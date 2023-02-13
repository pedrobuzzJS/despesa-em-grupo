import React, { useState } from "react";
import { GridSysten } from "../../components/GridLayout/Grid/Grid";
import { Modal } from "../../components/Modal/Modal";
import { useRole } from "../../context/RoleContext";
import { useSnackBar } from "../../context/snackBarContext";
import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";

export const HomePage: React.FC = () => {
    const { funcao } = useRole();
    const [ modal1, setModal1 ] = useState<boolean>(false);
    const [ modal2, setModal2 ] = useState<boolean>(false);
    const { showSnackBar } = useSnackBar();

    return (
        <>
            <GridSysten container>
                <GridSysten item cols={6}>
                    <InputDefault
                        id="cep"
                        type="cep"
                        name="cep"
                        label="CEP"
                    />
                </GridSysten>
                <GridSysten item cols={6}>
                    <InputDefault
                        id="CPF"
                        type="cpf"
                        name="CPF"
                        label="CPF"
                    />
                </GridSysten>
                <GridSysten item cols={6}>
                    <InputDefault
                        id="date"
                        type="date"
                        name="date"
                        label="DATA"
                    />
                </GridSysten>
                <GridSysten item cols={6}>
                    <InputDefault
                        id="password"
                        type="password"
                        name="password"
                        label="Senha"
                    />
                </GridSysten>
            </GridSysten>
            <Modal 
                id="modal_1"
                openModal={modal1}
                closeModal={() => setModal1(false)}
                backGroundClose
                closeOnEsc
            >
                <h1>{"modal 2"}</h1>
                    <button onClick={() => setModal2(true)} >Abrir Modal 2 cagado</button>
                <Modal 
                    id="modal_2"
                    openModal={modal2}
                    closeModal={() => setModal2(false)}
                    backGroundClose
                    closeOnEsc
                >
                    <>Bem vindo ao segundo modal</>
                </Modal>
            </Modal>

            <button onClick={() => setModal1(true)} >Abrir Modal</button>
            <button onClick={() => showSnackBar({type: "Success", message: "Hello World", callback: () => console.log("CallBack")})} >Adicionar SnackBar</button>

            <h1>PAPEL DO USUARIO = {funcao}</h1>
            <i className="ph-list"></i>
        </>
    );
};