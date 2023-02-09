import { type } from "os";
import React, { useState, useEffect, useCallback, PropsWithChildren, createContext, useContext }  from "react";
import { SnackBar } from "../components/SnackBar/SnackBar";

type SnackBarType = "Success" | "Info" | "Warning" | "Error" | "Default";

interface ISnackBarProps extends PropsWithChildren {
    showSnackBar: (type: SnackBarType, message: string) => void;
};

interface SnackBarProviderWithChildren extends PropsWithChildren {};

const SnackBarContext = createContext<ISnackBarProps>({} as ISnackBarProps);

const SnackBarProvider: React.FC<SnackBarProviderWithChildren> = ({children}) => {

    const showSnackBar = (type: SnackBarType, message: string) => {

    };

    return (
        <SnackBarContext.Provider value={
            {
                showSnackBar: showSnackBar
            }
        }>
            {children}
        </SnackBarContext.Provider>
    );
};

export function useSnackBar() {
    const context = useContext(SnackBarContext);
    return context;
}