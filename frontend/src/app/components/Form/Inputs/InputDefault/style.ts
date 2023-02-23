import styled from "styled-components";

interface InputProps {
    focus: boolean;
    error: boolean;
};

export const InputContainerWrapper = styled.div<InputProps>`
`;

export const InputLabel = styled.label``;
export const InputDiv = styled.div`
    > input {
        width: 100%;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
        background-color: #eee;
    }
`;

export const StyledError = styled.h1`
`;