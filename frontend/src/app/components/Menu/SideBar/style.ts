import styled from "styled-components";

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
export const SideBar = styled.div`
    min-width: 250px;
    max-width: 250px;
    background: #1d1e20;
    height: 100vh;
    /* margin-left: -250px; */
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