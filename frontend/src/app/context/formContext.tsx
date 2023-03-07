import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface inputField {
    name: any;
    ref: any;
}
interface IFormProps {
    formValues?: {};
    handleSubmit: (e: React.FormEvent, urlBakc: string) => void;
    addFormValues: () => void;
    sendValues: boolean;
    inputArrayValues: string;
    setFormField: ({name, ref}: inputField) => void;
    getInitialValue: (name: string) => any;
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
    var dot = require('dot-object');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent, urlBakc: string) => {
        e.preventDefault();
        await setSendValues(!sendValues);
        const formObj = await fieldRefArray.reduce((obj: any, item: any) => ((obj[item.name] = item.ref.value), obj),{});
        const newObjectValues = dot.object(formObj);
        try {
            await api.post(urlBakc, {
                data: JSON.stringify(newObjectValues)
            }).then(response => {
                const { status } = response;
                navigate(-1)
            }).catch(async error => {
                // await setBackResponse(error.response.data.message.code);
                // await setShowSnackBar(true);
            }).finally(
            );
        } catch (error) {
            console.log(error);
        };
    };

    const getInitialValue = (name: string) => {
        return name;
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
                    setFormField: setFormFieldArray,
                    getInitialValue: getInitialValue
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