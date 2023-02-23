import React, { createContext, PropsWithChildren, useContext } from "react";

interface IFormProps {
    formValues?: {};
};

interface FormWithChildren extends PropsWithChildren {};

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({children}) => {

    return (
        <FormContext.Provider
            value={
                {
                }
            }
        >
            <form>
                {children}
            </form>
        </FormContext.Provider>
    );
};

export function useForm() {
    const context = useContext(FormContext);
    return context;
};