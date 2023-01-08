import React, { useState, 
    createContext, 
    useContext, 
    PropsWithChildren 
} from "react";
import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { LinkMenu } from "../@types/LinkMenu";

interface MenuInterface {
    name: string;
    currentRoute: string | null;
    cachedMenu: LinkMenu[] | null;
};

interface MenuProviderChildren extends PropsWithChildren {};

const MenuContext = createContext<MenuInterface>({} as MenuInterface);

export const MenuProvider: React.FC<MenuProviderChildren> = ({children}) => {
    const [ nome, setNome ] = useState<string | null>(null);
    const [ rotaAtual, setRotaAtual ] = useState<string | null>(null);
    const { data, loadding } = useFetch<any>("menu");
    const { pathname } = useLocation();

    return (
        <MenuContext.Provider value={{
            name: pathname,
            currentRoute: rotaAtual,
            cachedMenu: data,
        }}>
            {children}
        </MenuContext.Provider>
    );
};

export function useMenu() {
    const context = useContext(MenuContext);
    return context;
};