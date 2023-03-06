import React, { ButtonHTMLAttributes, useCallback, useRef, useState } from "react";
import { ButtonConteinar, DropDownContent, DropDownOption, StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String;
    icon?: string;
    hasBackGround?: boolean;
    dropDownOption?: any[];
};

export const Button: React.FC<ButtonProps> = ({buttonDescription, dropDownOption, ...props}) => {
    const [ isDropDownOpen, setIsDropDownOpen ] = useState<boolean>(false);
    // const [ hasDropDown ] = useState()
    const buttonRef = useRef(null);
    const toggleDropDownOpen = useCallback(() => {
        setIsDropDownOpen(!isDropDownOpen);
    }, []);

    const openDropDown = useCallback(() => {
        setIsDropDownOpen(true);
    }, []);
    const closeDropDown = useCallback(() => {
        setIsDropDownOpen(false);
    }, []);

    return (
        <ButtonConteinar
            onMouseOver={openDropDown}
            onMouseLeave={closeDropDown}
        >
            <StyledButton
                ref={buttonRef}
                {...props}
            >
                {buttonDescription}
                {dropDownOption && dropDownOption.length ?
                    <DropDownOption />
                    :
                    <></>
                }             
            </StyledButton>
            <DropDownContent
                disabled={isDropDownOpen}
                hasDropDown={Boolean(dropDownOption?.length)}
            >
                {dropDownOption?.map((btn, index) => (
                    <Button
                        key={index}
                        buttonDescription={btn.title}
                        dropDownOption={btn.dropDownButtons}
                    />
                ))}
            </DropDownContent>
        </ButtonConteinar>
    );
};