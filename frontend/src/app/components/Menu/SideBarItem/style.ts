import styled from "styled-components";
import { Link } from "react-router-dom";

interface LinkContainerToggle {
    disabled?: boolean;
}

export const MenuItem = styled.li``;

export const LinkContainer = styled(Link)<LinkContainerToggle>`
    width: 100%;
    /* max-width: 63px; */
    display: flex;
    padding: 5px 15px 5px 15px;
    justify-content: space-between;
    align-items: center;
    /* display: none; */
    /* margin-left: 200px; */
    /* display: ${({ disabled }) => (disabled && disabled === true ? 'block' : 'none')}; */

    &:hover {
        background: lightgray;

        > svg {
            transform: rotate(180deg);
            transition: 350ms;
        }
    }

    > svg {
        width: 25px;
        height: 25px;
        /* transform: rotate(90deg); */
        /* transition: 350ms; */
        /* margin-left: 4px; */
    }
    text-decoration: none;
    color: #fff;
`;

export const MenuItemSpan = styled.span`
    visibility: hidden;
`;