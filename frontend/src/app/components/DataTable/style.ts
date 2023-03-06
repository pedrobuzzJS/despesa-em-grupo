import styled, { css } from "styled-components";

export const Container = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const TableContainer = styled.table`
    width: 100%;
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
    /* background: ${props => props.isOdd? "#dddddd" : ""}; */

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
    width: 100%;
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


export const TableSSS = styled.div`
    /* margin: 0 0 40px 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    display: table;
    display: block; */
    width: 100%;
`;

export const StyledTable = styled.table`
    width: 100%;
    margin: 2rem 0;
	padding: 1rem;
	box-shadow: 0 0 5px #333;
	/* box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1); */
	border: solid 1px #fff;
	background-color: #fff;
	border-radius: 1rem;
	position: relative;
`;

export const Thead = styled.thead`
    text-align: left;
    width: 100%;
    position: sticky;
    top: 0;
`;

export const TheadTR = styled.tr``;

export const TheadTH = styled.th`
    border: solid 1px #fff;
    background-color: rgb(238 238 238 / 50%);
    backdrop-filter: blur(5px);
    border-radius: 0.5rem;
`;

export const Tbody = styled.tbody``;

export const TbodyTR = styled.tr<TableRowProps>`
    background: ${props => props.isOdd? "#dddddd" : ""};
`;

export const TbodyTRTH = styled.th``;

export const TbodyTRTD = styled.td`
    /* border-top: solid 1px #fff; */
    /* border-bottom: solid 1px #fff; */
    /* border-radius: 0.5rem; */
    padding: .1rem;
    text-align: left;
`;