import React, { PropsWithChildren, useState, useCallback } from "react";
import { Cabecalho, 
    Conteudo, 
    MenuSuperior, 
    PaginaTotal, 
    Rodape, 
    SideBar 
} from "./style";

export const SideBarLayout: React.FC<PropsWithChildren> = ({children}) => {
    const [ openSideBar, setOpenSideBar ] = useState<boolean>(false);

    return (
        <>
            <Cabecalho>
                <MenuSuperior>
                    <li>
                        <a href="#">Item 1</a>
                    </li>
                    <li>
                        <a href="#">Item 2</a>
                    </li>
                    <li>
                        <a href="#">Item 3</a>
                    </li>
                    <li>
                        <a href="#">Item 4</a>
                    </li>
                    <li>
                        <a href="#">Item 5</a>
                    </li>
                    <li>
                        <a href="#">Item 6</a>
                    </li>
                </MenuSuperior>
                <a href="#">Teste de posicionamento</a>
            </Cabecalho>

            <PaginaTotal>

                <SideBar>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Item 1</a>
                            </li>
                            <li>
                                <a href="#">Item 2</a>
                            </li>
                            <li>
                                <a href="#">Item 3</a>
                            </li>
                            <li>
                                <a href="#">Item 4</a>
                            </li>
                            <li>
                                <a href="#">Item 5</a>
                            </li>
                            <li>
                                <a href="#">Item 6</a>
                            </li>
                        </ul>
                    </nav>
                </SideBar>
                <Conteudo>
                    {children}
                </Conteudo>

            </PaginaTotal>
            <Rodape>
            </Rodape>
        </>
    );
};