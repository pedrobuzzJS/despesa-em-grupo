import React, { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import { InputContainer } from "./style";
import { cep, currency, cpf, nullMask } from "../Masks/Masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
    type:   "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
            | "currency" | "cep" | "date" | "number";
    prefix?: string;
    spanText?: string;
    percent?: string;
    label: any;
    id: any;
};

export const InputDefault: React.FC<InputProps> = ({ name, id, type, prefix, spanText, percent, label, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    const [ inputErro, setInputErro ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleInputError = useCallback(() => {

    }, []);
    
    const handleKeyDown = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {        
            if (type === "cep") {
                cep(e);
            }
            if (type === "currency") {
                currency(e);
            }
            if (type === "cpf") {
                cpf(e);
            }
            if (type === "email") {
                // emailValidation(e);
            }
            if (!type) {
                nullMask(e);
            }
        }, 
        [type]
    );

    return (
        <InputContainer
            percent={percent}
            focus={isFocused}
            error={inputErro}
        >
            <label
            htmlFor={id}
                >
                {label}
            </label>
            <br />
            <input
                ref={inputRef}
                name={name}
                type={type}
                onKeyDown={handleKeyDown}
                id={id}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}
            />
        </InputContainer>
    );
};