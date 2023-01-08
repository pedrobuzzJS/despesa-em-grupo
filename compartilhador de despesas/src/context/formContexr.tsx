import React, { useState, 
    createContext, 
    useContext, 
    useCallback, 
    PropsWithChildren 
} from "react";

interface FormState { 
    change: object | null;
    setChangeState: (e: any) => void;
    getEvent: () => any;
};

interface FormProviderWithChildren extends PropsWithChildren {};

const FormContext = createContext<FormState>({} as FormState);

export const FormProvider: React.FC<FormProviderWithChildren> = ({children}) => {
    const [ changeState, setChangeState ] = useState<React.FormEvent | any>();

    function change(e: any) {
        setChangeState(e);
    };

    function getEvent() {
        return changeState;
    };

    return (
        <FormContext.Provider value={{
            change: {},
            setChangeState: change,
            getEvent: getEvent
        }}>
            {children}
        </FormContext.Provider>
    );
};

export function useForm() {
    const context = useContext(FormContext);
    return context;
};