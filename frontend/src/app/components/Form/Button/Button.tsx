import React, { ButtonHTMLAttributes, useRef } from "react";
import { ButtonConteinar, StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String;
    icon?: string;
    hasBackGround?: boolean;
    size?: "big" | "small" | "prettySmall";
    color?: "pink" | "purble" | "lightblue";
};

export const Button: React.FC<ButtonProps> = ({buttonDescription}) => {
    const buttonRef = useRef(null);

    return (
        <ButtonConteinar>
            <StyledButton
                ref={buttonRef}
            >
                {buttonDescription}
            </StyledButton>
        </ButtonConteinar>
    );
};