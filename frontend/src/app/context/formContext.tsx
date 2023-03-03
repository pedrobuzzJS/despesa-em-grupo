import React, { createContext, PropsWithChildren, useContext, useRef, useState } from "react";

interface inputField {
    name: any;
    ref: any;
}
interface IFormProps {
    formValues?: {};
    handleSubmit: (e: React.FormEvent) => void;
    addFormValues: () => void;
    sendValues: boolean;
    inputArrayValues: string;
    setFormField: ({name, ref}: inputField) => void;
};

interface FormWithChildren extends PropsWithChildren {};

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({children}) => {
    // const [ formValues, setFormValues ] = useState({});
    const [ sendValues, setSendValues ] = useState<boolean>(false);
    const [ inputArrayValues, setInputArrayValues ] = useState("");
    const fieldRefArray: inputField[] = [];
    const setFormFieldArray = ({name, ref}: inputField) => {
        fieldRefArray.push({name, ref});
    };

    // const registerField = useCallback((field: UnformField) => {
    //     fields.current.push(field)
    //   }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSendValues(!sendValues);
        fieldRefArray.forEach((item) => {
            console.log("***" + item?.name);
            console.log("***" + item?.ref?.value);
        })
    };

    const addFormValues = () => {

    };

    return (
        <FormContext.Provider
            value={
                {
                    handleSubmit: handleSubmit,
                    addFormValues: addFormValues,
                    sendValues: sendValues,
                    inputArrayValues: inputArrayValues,
                    setFormField: setFormFieldArray
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