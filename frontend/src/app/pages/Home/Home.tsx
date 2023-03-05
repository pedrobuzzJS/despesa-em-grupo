import React, { useState } from "react";
import { GridSysten } from "../../components/GridLayout/Grid/Grid";
// import { Modal } from "../../components/Modal/Modal";
import { useRole } from "../../context/RoleContext";
import { useSnackBar } from "../../context/snackBarContext";
// import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";
import { Form } from "../../components/Form/Form";
import { FormInputs, InputType } from "../../utils/FormFields";
import { Modal } from "../../components/Modal/Modal";
import { DataGrid } from "../../components/DataTable/DataTable";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Operation } from "../../utils/Operation";
import { useFetch } from "../../hooks/useFetch";
import { LeftUtils } from "../../components/LeftUtils/LeftUtils";
import { BottomUtils } from "../../components/BottomUtils/BottomUtils";
import { TopUtils } from "../../components/TopUtils/TopUtils";

const inputs: FormInputs[] = [
    {
        name: "cep",
        id: "cep",
        label: "CEP",
        placeholder: "CEP",
        type: InputType.CEP,
        cols: 4
    },
    {
        name: "cpf",
        id: "cpf",
        label: "CPF",
        placeholder: "CPF",
        type: InputType.CPF,
        cols: 4
    },
    {
        name: "texto",
        id: "texto",
        label: "TEXTO",
        placeholder: "TEXTO",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "name_do_select",
        id: "sel",
        label: "Teste de Select",
        placeholder: "",
        type: InputType.SELECT,
        cols: 4,
        options: [
            {
                key: "1",
                value: "1",
            },
            {
                key: "2",
                value: "2",
            },
        ]
    }
];

const campos: GridFields[] = [
    {
        field: "id",
        title: "ID",
        description: "id",
        key: true,
        type: FieldTypes.TEXT,
    },
    {
        field: "name",
        title: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT,
    },
    {
        field: "parameters",
        title: "Parametros",
        description: "Parametros",
        type: FieldTypes.TEXT,
    },
    {
        field: "route",
        title: "Rotas",
        description: "Rotas",
        type: FieldTypes.TEXT,
    },
    {
        field: "icon",
        title: "Icone",
        description: "Icone",
        type: FieldTypes.TEXT,
    },
    {
        field: "parent_id",
        title: "Menu Pai",
        description: "Menu Pai",
        type: FieldTypes.TEXT,
    },
    {
        field: "component",
        title: "Componente",
        description: "Componente",
        type: FieldTypes.TEXT,
    },
    {
        field: "has_childrens",
        title: "Possui Filho",
        description: "Possui Filho",
        type: FieldTypes.TEXT,
    },
    {
        field: "status_id",
        title: "Status ID",
        description: "status_id",
        type: FieldTypes.TEXT,
    },
    {
        field: "created_at",
        title: "Criado em",
        description: "created_at",
        type: FieldTypes.TEXT,
    },
    {
        field: "updated_at",
        title: "Alterado em",
        description: "updated_at",
        type: FieldTypes.TEXT,
    },
    {
        field: "buttons",
        title: "Acoes",
        description: "Acoes",
        type: FieldTypes.BUTTON,
        buttons: [
            {
                button: "acoes",
                action: Operation.DROP,
                title: "",
                icon: "RiIcons.RiDashboardFill",
                rotina: "drop",
                dropDownButtons: [
                    {
                        button: "menu",
                        action: Operation.VIEW,
                        title: "Visualizar",
                        icon: "RiDashboardFill",
                        rotina: "menu",
                    },
                    {
                        button: "menu",
                        action: Operation.ALTER,
                        title: "Alterar",
                        icon: "RiDashboardFill",
                        rotina: "menu",
                    },
                    {
                        button: "menu",
                        action: Operation.DELETE,
                        title: "Deletar    ",
                        icon: "RiDashboardFill",
                        rotina: "menu",
                    },
                ]
            }
        ]
    }
];

export const HomePage: React.FC = () => {
    const { funcao } = useRole();
    const [ modal1, setModal1 ] = useState<boolean>(false);
    const [ modal2, setModal2 ] = useState<boolean>(false);
    const { showSnackBar } = useSnackBar();
    const { data } = useFetch("menu");

    return (
        <>
            <GridSysten container>
                <Form
                    campos={inputs}
                />
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

            <GridSysten container>
                <GridSysten item cols={9}>
                    <DataGrid 
                        columns={campos} 
                        initialData={data}
                    />
                </GridSysten>
            </GridSysten>
            <LeftUtils />
            <BottomUtils />
            <TopUtils
                isOpen={false}
            >
                <h1>Dentro do Utils</h1>
            </TopUtils>
        </>
    );
};