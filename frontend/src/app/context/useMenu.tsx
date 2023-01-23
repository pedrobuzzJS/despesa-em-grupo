import React, { useState,
    createContext,
    useContext,
   //  useEffect,
    PropsWithChildren } from "react";
import { useFetch } from "../hooks/useFetch";
import { LinkMenu } from "../model/LinkMenu";
import { useLocation } from "react-router-dom";

interface MenuInterface {
   menuNome: string | null,
   rotaAtual: string | null,
   fetechedMenu: LinkMenu[],
};

interface MenuProviderChildren extends PropsWithChildren {};

const MenuContext = createContext<MenuInterface>({} as MenuInterface);

export const MenuProvider: React.FC<MenuProviderChildren> = ({children}) => {
   const [ nome, setNome ] = useState<string | null>(null);
   const [ rotaAtual, setRotaAtual ] = useState<string | null>(null);
   const { data, loadding } = useFetch<any>("menu");
   const { pathname } = useLocation();

   // useEffect( () => {
   //     let menuCopy: LinkMenu[] = data;
   //     let rotaAtual = menuCopy.filter( item => item.rota === pathname.replace("/", "") );
   //     console.log(rotaAtual);
   // }, [data, pathname] );

   return (
       <MenuContext.Provider value={{
           menuNome: pathname,
           rotaAtual: rotaAtual,
           fetechedMenu: data,
       }}>
           {children}
       </MenuContext.Provider>
   );
};

export function useMenu() {
   const context = useContext(MenuContext);
   return context;
};