import React, { FormEvent, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { InputContainerWrapper, InputDiv, InputLabel, StyledError } from "./style";
import { cep, currency, cpf, nullMask, emailValidation } from "../Masks/Masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    id: string;
    label: string;
    placeholder?: string;
    type:   "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
            | "currency" | "cep" | "date" | "number";
};

export const InputDefault: React.FC<InputProps> = ({ name, id, type, placeholder, label, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState<any>("");

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    // const handleInputChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    //     setInputValue(e.currentTarget?.value);
    // }, []);

    useEffect(() => {
        // console.log(inputValue);
    }, [inputValue]);

    const handleKeyDown = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {        
            switch (type) {
                case "cep":
                    setInputValue(cep(e));
                break;
                case "currency":
                    setInputValue(currency(e));
                break;
                case "cpf":
                    setInputValue(cpf(e));
                break;
                case "email":
                    setInputValue(emailValidation(e));
                break;
                case "text":
                    setInputValue(nullMask(e));
                break;
                default:
                    setInputValue(nullMask(e));
                break;
            };
        }, 
        [type]
    );

    return (
        <>
            <InputContainerWrapper
                focus={isFocused}
                error={Boolean(error)}
            >
                <InputLabel htmlFor={id} >
                    <span>
                        {label}:
                    </span>
                </InputLabel>
                <InputDiv>
                    <input
                        ref={inputRef}
                        type={type}
                        name={name}
                        id={id}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={handleKeyDown}
                        placeholder={placeholder}
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