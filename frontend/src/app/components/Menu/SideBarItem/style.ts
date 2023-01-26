import styled from "styled-components";
import { Link } from "react-router-dom";

interface LinkContainerToggle {
    disabled: boolean;
}

export const MenuItem = styled.li``;

export const LinkContainer = styled(Link)<LinkContainerToggle>`
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    display: flex;
    padding: 5px 15px 5px 15px;
    justify-content: space-between;
    align-items: center;
    transition: all 1s ease;

    &:hover {
        /* background: lightgray; */
        background: lightblue;

        > svg {
            transform: rotate(180deg);
            transition: 350ms;
        }
    }

    > svg {
        /* margin-left: 50px; */
        width: 25px;
        height: 25px;
        /* transform: rotate(90deg); */
        /* transition: 350ms; */
        /* margin-left: 4px; */
    }
    text-decoration: none;
    color: #fff;
`;

export const MenuSpanDiv = styled.div<LinkContainerToggle>`
    color: red;
    visibility: ${({ disabled }) => (disabled && disabled === true ? 'hidden' : 'visible')};
`;