import styled, { css } from "styled-components";
import { IGridSystem } from "./Grid";

export const StyledGrid = styled.div<IGridSystem>`
    ${props => props?.container === true && css`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: start;
    `}

    ${props => props?.item === true && css`
        display: block;
        height: 100%;
    `}

    ${props => props?.item === true && css`
        flex-basis: calc((${props.cols}/12)*100%);
    `}
`;