import styled from "styled-components";

interface ShowMenuToggle {
    disabled: boolean;
}

export const Cabecalho = styled.header`
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    background: #1d1e20;
    height: 50px;
    padding: 20px;
    width: 100%;
    
    a {
            color: white;
            text-decoration: none;
            padding: 10px;
        }
`;

export const MenuSuperior = styled.ul`
    display: flex;
    justify-content: space-between;

    li {
        a {
            color: white;
            text-decoration: none;
            padding: 10px;
        }
    }
`;

export const WrapperMenu = styled.div<ShowMenuToggle>`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */

    div {
        display: block;
        padding-left: 7px;
        padding-right: 7px;
        cursor: pointer;
        /* margin-left: 230px; */
        margin-left: ${({ disabled }) => (disabled && disabled === true ? '230px' : '')};
        transition: all 0.5s;
    }
`;

export const SideBar = styled.div<ShowMenuToggle>`
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    background: #1d1e20;
    height: 100vh;
    transition: all 0.5s;
    /* position: sticky; */
    top: 0;
`;

export const OpenButton = styled.div<ShowMenuToggle>`
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    padding: 5px 15px 5px 15px;
    > svg {
        width: 20px;
        height: 20px;
    }
`;

export const PaginaTotal = styled.main`
    display: flex;
    /* height: 100%; */
    /* align-items: stretch; */
`;

export const Conteudo = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Rodape = styled.div`
`;

export const IconContainer = styled.div`
    display: block;
    padding: 7px;
    cursor: pointer;
`;