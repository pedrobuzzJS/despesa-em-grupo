import styled, { css } from "styled-components";

export const Container = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const TableContainer = styled.table`
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;

    th
        {
            padding: 10px;
            background: #bcbcbc;
            text-align: left;
        }
        
    tbody {
        width: 100%;
    }
`;

interface TableRowProps {
    isOdd?: boolean
}

export const TableRows = styled.tr<TableRowProps>`
    text-align: left;
    border-bottom: 1px solid #bcbcbc;
    line-height: 15px;
    background: ${props => props.isOdd? "#dddddd" : ""};

    &:hover {
        background: #b0acac;
    }

    td {
        padding: 10px;
        text-align: left;
    }
`;

export const ButtonContainerGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    padding-bottom: 15px;
    justify-content: right;
`;

export const FiltersContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-bottom: 15px;
`;


export const TableSSS = styled.table`
    margin: 0 0 40px 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    display: table;
    /* @media screen and (max-width: 580px); */
    display: block;
`;

export const Row = styled.div`

`;