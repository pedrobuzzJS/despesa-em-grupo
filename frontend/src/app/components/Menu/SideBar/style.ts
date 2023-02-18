import styled from "styled-components";

interface ShowMenuToggle {
    disabled: boolean;
}

export const SideBar = styled.aside<ShowMenuToggle>`
    background: tomato;
    height: 100%;
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    transition: all 0.4s;
    position: fixed;

    .qualquer-coisa {
        margin: 50px;
    }
`;

export const BarraSuperior = styled.div`
    background: #3399ff;
    max-height: 100px;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
`;

export const Conteudo = styled.div<ShowMenuToggle>`
    width: 100%;
    height: 100%;
    /* padding-left: 60px; */
    padding-left: ${({ disabled }) => (disabled && disabled === true ? '260px' : '60px')};
    padding-right: 10px;
    transition: all 0.4s;
`;