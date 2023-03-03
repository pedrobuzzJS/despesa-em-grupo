import styled from "styled-components";

interface InputProps {
    // focus: boolean;
    error: boolean;
};

export const InputContainerWrapper = styled.div<InputProps>`
    > div {
        > input {
            display: block;
            width: 100%;
            padding: 8px 16px;
            line-height: 25px;
            font-size: 14px;
            font-weight: 500;
            font-family: inherit;
            border-radius: 6px;
            -webkit-appearance: none;
            color: var(--input-color);
            border: 1px solid var(--input-border);
            background: var(--input-background);
            transition: border .3s ease;
            width: 95%;
            height: 40px;
            &::placeholder {
                color: var(--input-placeholder);
            }
            &:focus {
                outline: none;
                border-color: var(--input-border-focus);
            }
        }
    }
`;

export const InputLabel = styled.label``;

export const InputDiv = styled.div`
    > input {
    }
`;

export const StyledError = styled.h1`
`;