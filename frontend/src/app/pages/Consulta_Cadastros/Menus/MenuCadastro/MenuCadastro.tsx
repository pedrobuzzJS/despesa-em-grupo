import React from "react";
import { Form } from "../../../../components/Form/Form";
import { GridSysten } from "../../../../components/GridLayout/Grid/Grid";
import { FormInputs, InputType } from "../../../../utils/FormFields";

const inputs: FormInputs[] = [
    {
        key: true,
        name: "id",
        id: "id",
        label: "Código",
        placeholder: "Código",
        type: InputType.NUMBER,
        cols: 4,
        disabled: true,
    },
    {
        name: "name",
        id: "name",
        label: "Nome",
        placeholder: "Nome",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "parameters",
        id: "parameters",
        label: "Parametros",
        placeholder: "Parametros",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "route",
        id: "route",
        label: "Rotas",
        placeholder: "Rotas",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "icon",
        id: "icon",
        label: "Icone",
        placeholder: "Icone",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "parent_id",
        id: "parent_id",
        label: "Link Pai",
        placeholder: "Link Pai",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "component",
        id: "component",
        label: "Componente",
        placeholder: "Componente",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "has_childrens",
        id: "has_childrens",
        label: "Possui Filhos",
        placeholder: "Possui Filhos",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "order",
        id: "order",
        label: "Ordem",
        placeholder: "Ordem",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "disabled",
        id: "disabled",
        label: "Desabilitado",
        placeholder: "Desabilitado",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "status_id",
        id: "status_id",
        label: "Status",
        placeholder: "Status",
        type: InputType.SELECT,
        cols: 4,
        options: [
            {
                key: 1,
                value: "Ativo"
            },
            {
                key: 2,
                value: "Inativo"
            },
        ]
    },
    {
        name: "created_at",
        id: "created_at",
        label: "Criado em",
        placeholder: "Criado em",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "updated_at",
        id: "updated_at",
        label: "Alterado em",
        placeholder: "Alterado em",
        type: InputType.TEXT,
        cols: 4
    },
];

export const MenuCadastro: React.FC = () => {
    return (
        <>
            <GridSysten
                container
                justify="center"
            >
                <GridSysten
                    item
                    cols={12}
                >
                    <Form
                        campos={inputs}
                        urlBakc="menu"
                    />
                </GridSysten>
            </GridSysten>
        </>
    );
};