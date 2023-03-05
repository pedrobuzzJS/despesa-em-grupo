import styled, { css } from "styled-components";
import { Close } from "styled-icons/evil";

interface BottomUtilsToggle {
    disabled: boolean;
};

export const Container = styled.div<BottomUtilsToggle>`
    position: fixed;
    width: 100%;
    height: 400px;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--info);

    ${props => props?.disabled === false && css`
    margin-bottom: -400px;
    `}

    transition: all 0.5s;
    z-index: 500;
`;

export const BottomUtilsCloseButton = styled(Close)`
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