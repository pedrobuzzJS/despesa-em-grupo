import React, { PropsWithChildren, useState, useCallback } from "react";
import { Cabecalho, 
    Conteudo, 
    IconContainer, 
    MenuSuperior, 
    PaginaTotal, 
    Rodape, 
    SideBar, 
    OpenButton
} from "./style";
import * as IoIcons from "react-icons/io";
import * as FaIcons from 'react-icons/fa';
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { IconContext } from "react-icons";
import { useMenu } from "../../../context/useMenu";

export const SideBarLayout: React.FC<PropsWithChildren> = ({children}) => {
    // const [ isSideBarOpen, setIsSideBarOpen ] = useState<boolean>(false);
    // const showSideBar = () => setIsSideBarOpen(!isSideBarOpen);

    const { isSideBarOpen, showSideBar } = useMenu();

    return (
        <IconContext.Provider value={
            {
                color: '#fff'
            }
        }>
            <PaginaTotal>
                <SideBar disabled={isSideBarOpen}>
                    <OpenButton 
                        disabled={isSideBarOpen}
                        onClick={showSideBar}
                    >
                        <FaIcons.FaBars />
                    </OpenButton>
                    <SideBarItem />
                </SideBar>
                <Conteudo>
                    {children}
                </Conteudo>
                <Rodape />
            </PaginaTotal>
        </IconContext.Provider>
    );
};