import React from "react";
import { useRole } from "../../context/RoleContext";

export const PageA: React.FC = () => {
    const { children, funcao } = useRole();

    console.log(funcao);

    return (
        <h1>Funcao = {funcao}</h1>
    );
}