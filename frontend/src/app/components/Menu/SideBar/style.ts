import styled from "styled-components";

interface ShowMenuToggle {
    disabled: boolean;
}

export const Cabecalho = styled.header`
    display: flex;
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

// export const WrapperMenu = styled.div<ShowMenuToggle>`
//     display: flex;
//     flex-direction: row;

//     div {
//         display: block;
//         padding-left: 7px;
//         padding-right: 7px;
//         cursor: pointer;
//         margin-left: ${({ disabled }) => (disabled && disabled === true ? '230px' : '')};
//         transition: all 0.5s;
//     }
// `;

export const SideBar = styled.div<ShowMenuToggle>`
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    background: #1d1e20;
    height: 100vh;
    transition: all 0.5s;
    /* top: 0; */
    position: relative;
`;

export const OpenButton = styled.div<ShowMenuToggle>`
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    padding: 15px 15px 15px 15px;
    margin-bottom: 15px;
    position: absolute;
    cursor: pointer;
    > svg {
        width: 20px;
        height: 20px;
    }
`;

export const PaginaTotal = styled.main`
    display: flex;
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