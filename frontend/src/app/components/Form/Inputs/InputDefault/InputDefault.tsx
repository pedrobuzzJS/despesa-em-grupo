import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { InputContainerWrapper, InputDiv, StyledError } from "./style";
import { cep, currency, cpf, nullMask, emailValidation } from "../Masks/Masks";
import { useForm } from "../../../../context/formContext";

export type FormInputTypes = "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
                        | "currency" | "cep" | "date" | "number";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string | undefined;
    id: string | undefined;
    label: string | undefined;
    placeholder?: string | undefined;
    type: FormInputTypes | undefined;
};

export const InputDefault: React.FC<InputProps> = ({ name, id, type, placeholder, label, ...props }) => {
    const [ error, setError ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState<any>();

    const { sendValues, inputArrayValues, setFormField } = useForm();

    useEffect(() => {
        setFormField({
            name: inputRef.current?.name,
            ref: inputRef.current
        });
    }, [setFormField, inputValue]);

    const handleKeyDown = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {        
            switch (type) {
                case "cep":
                    cep(e);
                    // return setInputValue(
                    //     {
                    //         name: e.currentTarget.name, 
                    //         value: e.currentTarget.value
                    //     }
                    // );
                break;
                case "currency":
                    // return setInputValue(
                    //     {
                    //         name: e.currentTarget.name, 
                    //         value: e.currentTarget.value
                    //     }
                    // );
                break;
                case "cpf":
                    cpf(e);
                    // return setInputValue(
                    //     {
                    //         name: e.currentTarget.name, 
                    //         value: e.currentTarget.value
                    //     }
                    // );
                break;
                case "email":
                    // return setInputValue(
                    //     {
                    //         name: e.currentTarget.name, 
                    //         value: e.currentTarget.value
                    //     }
                    // );
                break;
                case "text":
                    // return setInputValue(
                    //     {
                    //         name: e.currentTarget.name, 
                    //         value: e.currentTarget.value
                    //     }
                    // );
                break;
                default:
                    // return setInputValue(
                    //     {
                    //         name: e.currentTarget.name, 
                    //         value: e.currentTarget.value
                    //     }
                    // );
                break;
            };
        }, 
        [type]
    );

    return (
        <>
            <InputContainerWrapper
                error={Boolean(error)}
            >
                <label htmlFor={id}>
                    <span>
                        {label}
                    </span>
                </label>
                <InputDiv>
                    <input
                        ref={inputRef}
                        type={type}
                        name={name}
                        id={id}
                        onChange={handleKeyDown}
                        placeholder={placeholder}
                        // value={inputValue?.value}
                        {...props}
                    />
                </InputDiv>
                { error !== null && 
                    <StyledError>
                        {error}
                    </StyledError>
                }
            </InputContainerWrapper>
        </>
    );
};