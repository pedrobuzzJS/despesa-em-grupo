import React, { useState, 
    useEffect, 
    useCallback, 
    useRef, 
    PropsWithChildren, 
    createContext, 
    useContext 
}  from "react";
import { ISnackBar } from "../utils/ISnackBar";
import { SnackBar } from "../components/SnackBar/SnackBar";
import styled from "styled-components";

export const SnackBarContainer = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
`;

interface ISnackBarProps {
    showSnackBar: ({ type, message, callback }: ISnackBar) => void;
    addSnackBar: () => void;
};

interface SnackBarProviderWithChildren extends PropsWithChildren {};

const SnackBarContext = createContext<ISnackBarProps>({} as ISnackBarProps);

export const SnackBarProvider: React.FC<SnackBarProviderWithChildren> = ({children}) => {
    const [ snackBar, setSnackBar ] = useState<ISnackBar[]>([]);

    const showSnackBar = ({ type, message, callback }: ISnackBar) => {
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
        console.log(snackBar);
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
                <SnackBarContainer>
                    { snackBar.map((snack, index) => 
                        <SnackBar
                            key={index}
                            type={snack.type}
                            message={snack.message}
                        />)
                    }
                </SnackBarContainer>
            </>
        </SnackBarContext.Provider>
    );
};

export function useSnackBar() {
    const context = useContext(SnackBarContext);
    return context;
}