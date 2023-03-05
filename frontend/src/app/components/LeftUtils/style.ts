import styled, { css } from "styled-components";
import { Close } from "styled-icons/evil";

interface LetfUtilsToggle {
    disabled: boolean;
};

export const Container = styled.div<LetfUtilsToggle>`
    position: fixed;
    width: 500px;
    height: 100%;
    padding-bottom: 50px;
    top: 0;
    right: 0;
    background: var(--info);

    ${props => props?.disabled === false && css`
        margin-right: -500px;
    `}

    transition: all 0.5s;
    z-index: 500;
`;

export const LeftUtilsCloseButton = styled(Close)`
    position: absolute;
    background: transparent;
    right: 5px;
    top: 5px;
    cursor: pointer;
    display: block;
    padding: 2px;
    width: 45px;
    height: 55px;
`;