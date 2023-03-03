import styled, { css } from "styled-components";

interface ShowMenuToggle {
    disabled: boolean;
    superOpenSideBar?: boolean;
}

export const SideBar = styled.aside<ShowMenuToggle>`
    background: tomato;
    height: 100%;
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    transition: all 0.4s;
    position: fixed;
    z-index: 10;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    };
`;

export const SideBarItemList = styled.div`
    &:first-child {
        margin-top: 50px;
    }
    &:nth-last-child(2) {
        margin-bottom: 32px;
    }
`;

export const HambugerMenu = styled.div`
    height: 50px;
    width: 50px;
    cursor: pointer;
`;

export const Conteudo = styled.div<ShowMenuToggle>`
    width: 100%;
    height: 100%;
    padding-top: 60px;
    padding-left: ${({ disabled }) => (disabled && disabled === true ? '60px' : '60px')};

    ${props => props?.superOpenSideBar === true && css`
        padding-left: 260px;
    `}

    transition: all 0.4s;
    position: relative;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.3);
    }
`;

export const MenuIconDiv = styled.div`
    width: 100%;
    padding: 10px;
    > svg {
        color: white;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`;

export const TopMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 15px;
    padding-bottom: 50px;
    right: 0;
    background: var(--warning);
    z-index: 20;
`;

export const ExitSection = styled.div<ShowMenuToggle>`
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    height: 35px;
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    background: black;
    color: white;
    transition: all 0.4s;
`;