import React, { PropsWithChildren } from "react";
import { useForm } from "../../context/formContext";

interface IFormProps extends PropsWithChildren {};

export const Form: React.FC<IFormProps> = ({children}) => {

    const { teste } = useForm();

    console.log(teste);

    return (
        <>
            {children}
        </>
    );
};