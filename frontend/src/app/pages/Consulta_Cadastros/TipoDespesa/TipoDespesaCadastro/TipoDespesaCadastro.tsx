import React from "react";
import { Form } from "../../../../components/Form/Form";
import { GridSysten } from "../../../../components/GridLayout/Grid/Grid";
import { FormInputs, InputType } from "../../../../utils/FormFields";

const inputs: FormInputs[] = [
    {
        name: "id",
        id: "id",
        label: "Código",
        placeholder: "Código",
        type: InputType.NUMBER,
        cols: 4
    },
    {
        name: "nome",
        id: "nome",
        label: "Nome",
        placeholder: "Nome",
        type: InputType.TEXT,
        cols: 4
    },
    {
        name: "descricao",
        id: "descricao",
        label: "Descrição",
        placeholder: "Descrição",
        type: InputType.TEXT,
        cols: 4
    },
];

export const TipoDespesaCadastro: React.FC = () => {
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
                    />
                </GridSysten>
            </GridSysten>
        </>
    );
};