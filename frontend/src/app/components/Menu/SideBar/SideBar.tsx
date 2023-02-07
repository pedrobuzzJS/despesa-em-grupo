import React, { PropsWithChildren, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
// import * as IoIcons from "react-icons/io";
// import * as FaIcons from 'react-icons/fa';
// import { IconContext } from "react-icons";
import { useMenu } from "../../../context/useMenu";
import {    SideBar,
            BarraSuperior,
            Conteudo
} from "./style";

export const SideBarLayout: React.FC<PropsWithChildren> = ({children}) => {
    const { isSideBarOpen, showSideBar, openSideBar, closeSideBar } = useMenu();

    return (
        <>
            <BarraSuperior />
            <SideBar 
                disabled={isSideBarOpen}
                onMouseOver={openSideBar}
                onMouseLeave={closeSideBar}
            />
            <Conteudo>
                {/* {<Outlet />} */}
                {children}
            </Conteudo>
        </>
    );
};