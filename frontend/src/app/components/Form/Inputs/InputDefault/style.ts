import styled from "styled-components";

interface InputProps {
    focus: boolean;
    error: boolean;
};

export const InputContainerWrapper = styled.div<InputProps>`
    > div {
        > input {
            border: ${({ focus }) => (focus ? '2px solid blue' : '2px solid gray')};
            border-radius: 5px;
            width: 90%;
            height: 30px;
        }
    }
`;

export const InputLabel = styled.label``;

export const InputDiv = styled.div`
    > input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        background-color: #eee;
    }
`;

export const StyledError = styled.h1`
`;

// display: ${({ isSubMenuOpen }) => (isSubMenuOpen && isSubMenuOpen === true ? 'block' : 'none')};
// ${props => props?.container === true && css`
//     display: flex;
//     flex-wrap: wrap;
//     width: 100%;
//     justify-content: start;
// `}
// ${props => props?.item === true && css`
//     flex-basis: calc((${props.cols}/12)*100%);
// `}