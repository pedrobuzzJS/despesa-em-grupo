import React, { useState,
    createContext,
    useContext,
    PropsWithChildren, 
    } from "react";
import { useFetch } from "../hooks/useFetch";
import { LinkMenu } from "../model/LinkMenu";
import { useLocation } from "react-router-dom";

interface MenuInterface {
   menuNome: string | null,
   rotaAtual: string | null,
   fetechedMenu: LinkMenu[],
   isSideBarOpen: boolean;
   superOpenSideBar: boolean,
   toggleSideBar: () => void;
   openSideBar: () => void;
   closeSideBar: () => void;
};

interface MenuProviderChildren extends PropsWithChildren {};

const MenuContext = createContext<MenuInterface>({} as MenuInterface);

export const MenuProvider: React.FC<MenuProviderChildren> = ({children}) => {
    const [ nome, setNome ] = useState<string | null>(null);
    const [ rotaAtual, setRotaAtual ] = useState<string | null>(null);
    const { data, loadding } = useFetch<any>("menu");
    const { pathname } = useLocation();
    const [ fetechedMenu, setMenuList ] = useState<LinkMenu[]>();
    const [ isSideBarOpen, setIsSideBarOpen ] = useState<boolean>(false);
    const [ superOpenSideBar, setSuperOpenSideBar ] = useState<boolean>(false);

    const toggleSideBar = () => {
        if (superOpenSideBar === false) {
            setSuperOpenSideBar(true);
            return setIsSideBarOpen(true)
        } else {
            setSuperOpenSideBar(false);
            return setIsSideBarOpen(false)
        }
    };

    const openSideBar = () => {
        if (superOpenSideBar === true) return
        return setIsSideBarOpen(true);
    };

    const closeSideBar = () => {
        if (superOpenSideBar === true) return;
        return setIsSideBarOpen(false);
    };

   return (
       <MenuContext.Provider value={{
           menuNome: pathname,
           rotaAtual: rotaAtual,
           fetechedMenu: data,
           isSideBarOpen: isSideBarOpen,
           superOpenSideBar: superOpenSideBar,
           toggleSideBar: toggleSideBar,
           openSideBar: openSideBar,
           closeSideBar: closeSideBar
       }}>
           {children}
       </MenuContext.Provider>
   );
};

export function useMenu() {
   const context = useContext(MenuContext);
   return context;
};