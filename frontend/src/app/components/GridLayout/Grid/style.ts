import styled, { css } from "styled-components";
import { IGridSystem } from "./Grid";

export const StyledGrid = styled.div<IGridSystem>`
    /* display: ${({ container }) => (container && container === true ? '250px' : '50px')};
    display: ${({ item }) => (item && item === true ? '250px' : '50px')}; */

    ${props => props?.container === true && css`
        display: flex;
        flex-wrap: wrap;
        /* height: 100%; */
        width: 100%;
    `}

    ${props => props?.item === true && css`
        display: block;
        height: 100%;
        /* margin: 5px; */
    `}

    ${props => props?.cols === 1 && props?.item === true && css`
        flex-basis: calc((1/12)*100%);
    `}
    ${props => props?.cols === 2 && props?.item === true && css`
        flex-basis: calc((2/12)*100%);
    `}
    ${props => props?.cols === 3 && props?.item === true && css`
        flex-basis: calc((3/12)*100%);
    `}
    ${props => props?.cols === 4 && props?.item === true && css`
        flex-basis: calc((4/12)*100%);
    `}
    ${props => props?.cols === 5 && props?.item === true && css`
        flex-basis: calc((5/12)*100%);
    `}
    ${props => props?.cols === 6 && props?.item === true && css`
        flex-basis: calc((6/12)*100%);
    `}
    ${props => props?.cols === 7 && props?.item === true && css`
        flex-basis: calc((7/12)*100%);
    `}
    ${props => props?.cols === 8 && props?.item === true && css`
        flex-basis: calc((8/12)*100%);
    `}
    ${props => props?.cols === 9 && props?.item === true && css`
        flex-basis: calc((9/12)*100%);
    `}
    ${props => props?.cols === 10 && props?.item === true && css`
        flex-basis: calc((10/12)*100%);
    `}
    ${props => props?.cols === 11 && props?.item === true && css`
        flex-basis: calc((11/12)*100%);
    `}
    ${props => props?.cols === 12 && props?.item === true && css`
        flex-basis: calc((12/12)*100%);
    `}
`;