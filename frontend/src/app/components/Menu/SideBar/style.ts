import styled from "styled-components";

interface ShowMenuToggle {
    disabled: boolean;
}

export const Cabecalho = styled.header`
    display: flex;
    flex-direction: row;
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

export const WrapperMenu = styled.div<ShowMenuToggle>`
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
        display: block;
        padding-left: 7px;
        padding-right: 7px;
        cursor: pointer;
        /* margin-left: 230px; */
        margin-left: ${({ disabled }) => (disabled && disabled === true ? '230px' : '')};
        transition: all 0.3s;
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
export const SideBar = styled.div<ShowMenuToggle>`
    /* width: 250px; */
    background: #1d1e20;
    height: 100vh;
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    margin-left: ${({ disabled }) => (disabled && disabled === true ? '-50px' : '')};
    transition: all 0.3s;

`;

export const PaginaTotal = styled.main`
    display: flex;
    height: 100vh;
    align-items: stretch;
`;

export const Conteudo = styled.div`
`;

export const Rodape = styled.div`
`;

export const IconContainer = styled.div`
    display: block;
    padding: 7PX;
    cursor: pointer;
`;