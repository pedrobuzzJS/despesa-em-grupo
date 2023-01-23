import React, { 
    useEffect,
    createContext,
    useContext,
    useState } 
from "react";
import api from "../services/api";
// import { useParams } from "react-router-dom";


interface RoleInterface {
    funcao?: string[] | null;
    children?: React.ReactElement;
};

// interface RoleProviderProps extends PropsWithChildren {};

const RoleContext = createContext<RoleInterface>({} as RoleInterface);

export const RoleProvider: React.FC<RoleInterface> = ({funcao, children, ...props}) => {
    const [ role, setRole ] = useState<string[] | null>(null);

    const loadRules = useEffect(() => {
        try {
            
        } catch (error) {
            
        }
    }, []);

    return (
        <RoleContext.Provider value={{
            funcao: funcao,
            // children: children
        }}>
            {children}
        </RoleContext.Provider>
    );
};

export function useRole() {
    const context = useContext(RoleContext);
    return context;
};