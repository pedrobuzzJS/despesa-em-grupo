import React from "react";
import { useRole } from "../../context/RoleContext";
import { Separator } from "./style";

export const DashBoard: React.FC = () => {
    const { funcao } = useRole();

    return (
        <>
            <h1>PAPEL DO USUARIO = {funcao}</h1>
            <i className="ph-list"></i>
        </>
    );
}