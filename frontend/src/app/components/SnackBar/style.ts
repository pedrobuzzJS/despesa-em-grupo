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
`;