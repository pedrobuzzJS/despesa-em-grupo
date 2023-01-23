import styled, { css } from "styled-components";

interface ButtonProps {
    size?: string;
    color?: string;
};

export const ButtonContainer = styled.div`
    padding: 5px;
`;

export const ButtonStyle = styled.button<ButtonProps>`
    background-color: pink;
    padding: 20px 55px 20px 55px;
    border-radius: 5px;
    border: 1px solid purple;
    cursor: pointer;

    ${props => props?.size === "big" && css`
        font-size: 32px;
        padding: 20px;
    `}

    ${props => props?.size === "prettySmall" && css`
        font-size: 15px;
        padding: 9px;
    `}
`;