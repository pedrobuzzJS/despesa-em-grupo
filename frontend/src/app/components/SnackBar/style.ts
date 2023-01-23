import styled, { css } from "styled-components";

interface SnackBarProps {
    open: boolean;
    type: string | undefined;
}

export const SnackBarContainer = styled.div<SnackBarProps>`
    position: fixed;
    bottom: 0;
    left: 50%;
    max-width: 600px;
    min-width: 400px;
    width: auto;
    height: auto;
    margin-left: -200px;
    opacity: 0;
    visibility: hidden;
    color: #fff;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease-in-out;
    background-color: #333;
    
    > span {
        max-width: 90%;
        word-wrap: break-word;
    }

    ${props => props?.type === "Success" && css`
        background-color: rgb(0, 158, 0);
    `};

    ${props => props?.type === "Info" && css`
        background-color: rgb(86, 83, 255);
    `};

    ${props => props?.type === "Warning" && css`
        background-color: rgb(255, 181, 44);
    `};

    ${props => props?.type === "Error" && css`
        background-color: rgb(219, 55, 55);
    `};

    ${props => props?.open === true && css`
        opacity: 1;
        bottom: 20px;
        visibility: visible;
    `}

    > Button {
        display: block;
        padding: 2.5px;
        background: transparent;
        color: #fff;
        cursor: pointer;
    }
`;