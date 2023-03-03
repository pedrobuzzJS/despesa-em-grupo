import styled, { css } from "styled-components";

interface IToastStyle {
    type: "Success" | "Info" | "Warning" | "Error" | "Default";
}

export const Toast = styled.div<IToastStyle>`
    float: left;
    height: 150px;
    width: 235px;
    margin: 10px;

    ${props => props?.type === "Success" && css`
        background-color: var(--succes);
    `};

    ${props => props?.type === "Info" && css`
        background-color: var(--info);
    `};

    ${props => props?.type === "Warning" && css`
        background-color: var(--warning);
    `};

    ${props => props?.type === "Error" && css`
        background-color: var(--error);
    `};
`;