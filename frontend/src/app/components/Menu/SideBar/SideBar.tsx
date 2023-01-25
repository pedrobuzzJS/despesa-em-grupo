import React, { PropsWithChildren, useState, useCallback } from "react";
import { Cabecalho, 
    Conteudo, 
    IconContainer, 
    MenuSuperior, 
    PaginaTotal, 
    Rodape, 
    SideBar, 
    WrapperMenu
} from "./style";
import * as IoIcons from "react-icons/io";
import * as FaIcons from 'react-icons/fa';
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { IconContext } from "react-icons";

export const SideBarLayout: React.FC<PropsWithChildren> = ({children}) => {
    const [ isSideBarOpen, setIsSideBarOpen ] = useState<boolean>(false);
    const showSideBar = () => setIsSideBarOpen(!isSideBarOpen);

    return (
        <IconContext.Provider value={
            {
                color: '#fff'
            }
        }>
            <Cabecalho>
                <WrapperMenu disabled={isSideBarOpen}>
                    <div onClick={showSideBar}>
                        <FaIcons.FaBars />
                    </div>
                    <MenuSuperior>
                        <li>
                            <a href="#">Atalho 1</a>
                        </li>
                        <li>
                            <a href="#">Atalho 2</a>
                        </li>
                        <li>
                            <a href="#">Barra de Pesquisa 3</a>
                        </li>
                    </MenuSuperior>
                </WrapperMenu>
                <IconContainer>
                    <IoIcons.IoMdExit />
                </IconContainer>
            </Cabecalho>

            <PaginaTotal>

                <SideBar disabled={isSideBarOpen}>
                    
                    <SideBarItem />

                </SideBar>
                <Conteudo>
                    {children}
                </Conteudo>

            </PaginaTotal>
            <Rodape>
            </Rodape>
        </IconContext.Provider>
    );
};