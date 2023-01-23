import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    // type:   "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
    //         | "currency" | "cep" | "date" | "number";
    prefix: string;
    spanText: string;
    percent: string;
    label: string;
    id: string;
    alt: string;
    pixels: string;
};

export const InputDefault: React.FC<InputProps> = ({ name, id, type, prefix, spanText, percent, label, pixels, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<boolean>(false);
    const [ isFilled, setIsFilled ] = useState<boolean>(false);
    const [ inputError, setInputError ] = useState<string | null>(null);

    return (
        <></>
    );
};