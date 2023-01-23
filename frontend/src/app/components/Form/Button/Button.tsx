import React, { ButtonHTMLAttributes, useRef } from "react";
import { ButtonContainer, ButtonStyle } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: string;
    icon?: string;
    hasBackGround: boolean;
    size?: "big" | "small" | "prettySmall";
    color?: "pink" | "purble" | "lightblue";
};

export const Button: React.FC<ButtonProps> = ({buttonDescription, icon, hasBackGround, size, color, ...props}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <ButtonContainer>
            <ButtonStyle
                size={size}
                ref={buttonRef}
                color={color}
                {...props}>
                {buttonDescription}
            </ButtonStyle>
        </ButtonContainer>
    );
};