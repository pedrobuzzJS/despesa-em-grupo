import React from "react";
import { useParams } from "react-router-dom";
import { Form } from "../../../../components/Form/Form";
import { GridSysten } from "../../../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../../../hooks/useFetch";
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
        name: "nome",
        id: "nome",
        label: "Nome",
        placeholder: "Nome",
        type: InputType.TEXT,
        cols: 4,
    },
    {
        name: "descricao",
        id: "descricao",
        label: "Descrição",
        placeholder: "Descrição",
        type: InputType.TEXT,
        cols: 4,
    },
];

export const TipoDespesaCadastro: React.FC = () => {
    const { op, id } = useParams();
    const { data } = useFetch<any>("tipo-despesa", {
        params: {
            id: id
        }
    });

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
                        urlBakc="tipo-despesa"
                        initialData={data}
                        op={Number(op)}
                    />
                </GridSysten>
            </GridSysten>
        </>
    );
};