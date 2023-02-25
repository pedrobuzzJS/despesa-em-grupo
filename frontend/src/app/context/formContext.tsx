import React, { createContext, PropsWithChildren, useContext } from "react";
import { Form } from "../components/Form/Form";
import { TestTube } from "styled-icons/boxicons-regular";

interface IFormProps {
    formValues?: {};
    teste: string;
};

interface FormWithChildren extends PropsWithChildren {};

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({children}) => {
    return (
        <FormContext.Provider
            value={
                {
                    teste: "fontexto de form"
                }
            }
        >
            {children}
        </FormContext.Provider>
    );
};

export function useForm() {
    const context = useContext(FormContext);
    return context;
};