import React, { FormHTMLAttributes, useRef } from "react";
import { useForm } from "../../context/formContext";
import { FormInputs, InputType } from "../../utils/FormFields";
import { GridSysten } from "../GridLayout/Grid/Grid";
import { Button } from "./Button/Button";
import { InputDefault } from "./Inputs/InputDefault/InputDefault";
import { Select } from "./Inputs/Select/Select";
import { FormContainer, StyledForm } from "./style";
interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    op?: number;
    initialValue?: any[];
    campos: FormInputs[];
    urlBakc?: any;
    callBack?: (callback?: any) => void;
    children?: React.ReactNode
};

export const Form: React.FC<IFormProps> = ({ op,initialValue, campos, urlBakc, callBack, children }) => {

    const { handleSubmit } = useForm();

    return (
        <FormContainer>
            
            <StyledForm
                onSubmit={handleSubmit}
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
                                    value={campo.value}
                                    name={campo.name}
                                    listOptions={campo.options}
                                    label={campo.label}
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