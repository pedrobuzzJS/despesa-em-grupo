import React from "react";
import { DataGrid } from "../../../../components/DataTable/DataTable";
import { GridSysten } from "../../../../components/GridLayout/Grid/Grid";
import { useForm } from "../../../../context/formContext";
import { useFetch } from "../../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../../utils/Fields";
import { Operation } from "../../../../utils/Operation";

const campos: GridFields[] = [
    {
        key: true,
        field: "id",
        title: "ID",
        description: "id",
        type: FieldTypes.KEY,
    },
    {
        field: "nome",
        title: "Nome",
        description: "Nome",
        type: FieldTypes.TEXT,
    },
    {
        field: "descricao",
        title: "Descrição",
        description: "Descrição",
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
                        button: "tipo-despesa",
                        action: Operation.VIEW,
                        title: "Visualizar",
                        icon: "RiDashboardFill",
                        rotina: "tipo-despesa",
                    },
                    {
                        button: "tipo-despesa",
                        action: Operation.ALTER,
                        title: "Alterar",
                        icon: "RiDashboardFill",
                        rotina: "tipo-despesa",
                    },
                    {
                        button: "tipo-despesa",
                        action: Operation.DELETE,
                        title: "Deletar    ",
                        icon: "RiDashboardFill",
                        rotina: "tipo-despesa",
                    },
                ]
            }
        ]
    }
];

export const TipoDespesaConsulta: React.FC = () => {
    const { data } = useFetch("tipo-despesa");

    return (
        <>
            <GridSysten container justify="center">
                <GridSysten item cols={12}>
                    <DataGrid 
                        columns={campos} 
                        initialData={data}
                        pathMantencao="tipo-despesa"
                    />
                </GridSysten>
            </GridSysten>
        </>
    );
};