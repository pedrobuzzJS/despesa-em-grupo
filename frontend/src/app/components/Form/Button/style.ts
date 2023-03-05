import styled, { css } from "styled-components";
import { SortDown } from "styled-icons/boxicons-regular";

export const ButtonConteinar = styled.div`
`;

export const DropDownOption = styled(SortDown)`
    width: 20px;
    height: 20px;
`;

export const StyledButton = styled.button`
    appearance: none;
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;

    &:focus:not(:focus-visible):not(.focus-visible) {
        box-shadow: none;
        outline: none;
    }

    &:hover {
        background-color: #2c974b;
    }

    &:focus {
        box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
        outline: none;
    }

    &:disabled {
        background-color: #94d3a2;
        border-color: rgba(27, 31, 35, .1);
        color: rgba(255, 255, 255, .8);
        cursor: default;
    }

    &:active {
        background-color: #298e46;
        box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
    }
`;

interface isDropDownOpen {
    disabled: boolean;
    hasDropDown: boolean;
};

export const DropDownContent = styled.div<isDropDownOpen>`
    display: ${({ disabled }) => (disabled && disabled === true ? css`block` : css`none`)};

    ${props => props?.hasDropDown === false && css`
        display: none;
    `}

    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
`;