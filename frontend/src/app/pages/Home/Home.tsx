import React from "react";
import { GridSysten } from "../../components/GridLayout/Grid/Grid";
import { Form } from "../../components/Form/Form";
import { FormInputs, InputType } from "../../utils/FormFields";
import { DataGrid } from "../../components/DataTable/DataTable";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Operation } from "../../utils/Operation";
import { useFetch } from "../../hooks/useFetch";

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
    const { data } = useFetch("menu");

    return (
        <>
            <GridSysten container justify="center">
                {/* <Form
                    campos={inputs}
                /> */}
                <GridSysten item cols={12}>
                    <Form
                        campos={inputs}
                    />
                </GridSysten>
            </GridSysten>
            <GridSysten container justify="center">
                <GridSysten item cols={8}>
                    <DataGrid 
                        columns={campos} 
                        initialData={data}
                    />
                </GridSysten>
            </GridSysten>
        </>
    );
};