import React, { FormEvent, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { InputContainerWrapper, InputDiv, InputLabel, StyledError } from "./style";
import { cep, currency, cpf, nullMask } from "../Masks/Masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    id: string;
    label: string;
    type:   "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
            | "currency" | "cep" | "date" | "number";
};

export const InputDefault: React.FC<InputProps> = ({ name, id, type, prefix, label, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<boolean>(false);
    const [ inputErro, setInputErro ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState<any>("");

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget?.value);
    }, []);

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return (
        <>
            <InputContainerWrapper
                focus={isFocused}
                error={inputErro}
            >
                <InputLabel htmlFor={id} >{label}:</InputLabel>
                <InputDiv>
                    <input
                        ref={inputRef}
                        type={type}
                        name={name}
                        id={id}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleInputChange}
                        value={inputValue}
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