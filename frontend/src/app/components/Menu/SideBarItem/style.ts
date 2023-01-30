import styled from "styled-components";
import { Link } from "react-router-dom";

interface LinkContainerToggle {
    disabled: boolean;
}

export const MenuItem = styled.li``;

export const SideBarNav = styled.nav`
    height: 100%;
`;

export const LinkContainer = styled(Link)<LinkContainerToggle>`
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    display: flex;
    padding: 5px 15px 5px 15px;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease;

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
    }
    text-decoration: none;
    color: #fff;
`;

export const MenuSpanDiv = styled.div<LinkContainerToggle>`
    color: red;
    ${({ disabled }) => (disabled && disabled === true) ? 'visibility: visible;' : 'display: none;'}
`;