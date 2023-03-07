import React from "react";
import { DataGrid } from "../../../../components/DataTable/DataTable";
import { GridSysten } from "../../../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../../../hooks/useFetch";
import { LinkMenu } from "../../../../model/LinkMenu";
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

export const MenuConsulta: React.FC = () => {
    const { data: menus } = useFetch<LinkMenu[]>("menu");

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
                    <DataGrid
                        columns={campos} 
                        initialData={menus}
                        pathMantencao="menu"
                    />
                </GridSysten>
            </GridSysten>
        </>
    );
};