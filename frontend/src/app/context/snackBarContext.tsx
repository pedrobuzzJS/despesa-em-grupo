import React, { useState, 
    useEffect, 
    PropsWithChildren, 
    createContext, 
    useContext 
}  from "react";
import { IToast } from "../utils/ISnackBar";
import { ToastBar } from "../components/SnackBar/SnackBar";
import styled from "styled-components";

export const ToastContainer = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    /* display: flex; */
    /* flex-direction: column; */
`;

interface IToastProps {
    showSnackBar: ({ type, message, callback }: IToast) => void;
    addSnackBar: () => void;
};

interface SnackBarProviderWithChildren extends PropsWithChildren {};

const SnackBarContext = createContext<IToastProps>({} as IToastProps);

export const SnackBarProvider: React.FC<SnackBarProviderWithChildren> = ({children}) => {
    const [ snackBar, setSnackBar ] = useState<IToast[]>([]);

    const showSnackBar = ({ type, message, callback }: IToast) => {
        setSnackBar(
            [  
                ...snackBar,
                {
                    type: type,
                    message: message,
                    callback: callback
                }
            ]
        );
    };

    const addSnackBar = () => {
    };

    useEffect(() => {
    }, [snackBar]);

    return (
        <SnackBarContext.Provider value={
            {
                showSnackBar: showSnackBar,
                addSnackBar: addSnackBar
            }
        }>
            <>
                {children}
                <ToastContainer>
                    { snackBar.map((snack, index) => 
                        <ToastBar
                            key={index}
                            type={snack.type}
                            message={snack.message}
                        />)
                    }
                </ToastContainer>
            </>
        </SnackBarContext.Provider>
    );
};

export function useSnackBar() {
    const context = useContext(SnackBarContext);
    return context;
}