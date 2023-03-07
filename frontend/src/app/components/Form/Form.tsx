import React, { FormHTMLAttributes, useCallback } from "react";
import { useForm } from "../../context/formContext";
import { FormInputs, InputType } from "../../utils/FormFields";
import { GridSysten } from "../GridLayout/Grid/Grid";
import { Button } from "./Button/Button";
import { InputDefault } from "./Inputs/InputDefault/InputDefault";
import { Select } from "./Inputs/Select/Select";
import { FormContainer, StyledForm } from "./style";
interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    op?: number;
    initialData?: {};
    campos: FormInputs[];
    urlBakc: string;
    callBack?: (callback?: any) => void;
    children?: React.ReactNode
};

export const Form: React.FC<IFormProps> = ({ op, initialData, campos, urlBakc, callBack, children }) => {
    var dot = require('dot-object');

    const { handleSubmit } = useForm();

    // const findValueById = useCallback((values: any, key: any) => {
    //     if (values?.hasOwnProperty(key)) {
    //         const data = values[key];
    //         return data;
    //     }
    //     return "";
    // }, []);

    return (
        <FormContainer>
            
            <StyledForm
                onSubmit={(e) => handleSubmit(e, urlBakc)}
            >
                <GridSysten container>

                    {campos?.map( (campo, index) => (
                        campo.type === InputType.SELECT ?
                            <GridSysten
                                key={index}
                                item
                                cols={campo.cols}
                            >
                                <Select
                                    key={index}
                                    id={campo.id}
                                    value={dot.pick(campo.name, initialData)}
                                    name={campo.name}
                                    listOptions={campo.options}
                                    label={campo.label}
                                    disabled={campo.disabled}
                                />
                            </GridSysten>
                            :
                            <GridSysten
                                key={index}
                                item
                                cols={campo.cols}
                            >
                                <InputDefault
                                    key={index}
                                    name={campo.name}
                                    id={campo.id}
                                    label={campo.label}
                                    placeholder={campo.placeholder}
                                    type={campo.type}
                                    disabled={campo.disabled}
                                    initialData={initialData}
                                />
                            </GridSysten>
                    ) )}
                </GridSysten>
                <Button
                    buttonDescription={"Enviar"}
                />
            </StyledForm>
        </FormContainer>
    );
};