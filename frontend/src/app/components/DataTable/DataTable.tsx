import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Button } from "../Form/Button/Button";
import { ButtonContainer, ButtonContainerGrid, Container, TableContainer, TableRows, TableSSS } from "./style";

interface GridProps {
    columns: GridFields[],
    initialData: any,
    loading?: boolean,
    pathMantencao?: string;
};

export const DataGrid: React.FC<GridProps> = ({ columns, initialData, loading, pathMantencao, ...props }) => {
    const teste: any[] = initialData; 
    const navigate = useNavigate();

    const buildMaintenanceURL = useCallback( (btn: string, op: number, id?: any) => {
        let url = btn + "-manutencao" + `/${op}` + `/${id}`;
        return navigate("/"+url);
    }, [navigate]);

    const buttonInserFormValues = useCallback( (op: number) => {
        let url = pathMantencao + "-manutencao" + `/${op}`;
        return navigate("/"+url);
    }, [navigate] );

    return (
        // <Container>
        //     {loading ? 
        //         <h1>Carregando</h1> 
        //         :
        //         <>
        //             <ButtonContainer>
        //                 <Button
        //                     buttonDescription="Inserir"
        //                     size="prettySmall"
        //                     onClick={() => buttonInserFormValues(
        //                         2
        //                     )}
        //                 />
        //             </ButtonContainer>
        //             <TableContainer>
        //                 <thead>
        //                     <tr>
        //                         {columns && columns.map( (column, index) => (
        //                             <th key={index}>{column.title}</th>
        //                         ) )}
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {teste && teste?.map((item, index) => (
        //                         <TableRows key={index} isOdd={Boolean(index%2)}>
        //                             {columns && columns.map( (column, index) => (
        //                             column.type === FieldTypes.TEXT ?
        //                                 <td key={index}>
        //                                     {item[column?.field]}
        //                                 </td>
        //                                 :
        //                                 column.type === FieldTypes.BUTTON ?
        //                                 <td key={index}>
        //                                     <ButtonContainerGrid key={index}>
        //                                         {column.buttons?.map((btn, index) => (
        //                                             <Button
        //                                                 key={index}
        //                                                 size="prettySmall"
        //                                                 buttonDescription={btn.title}
        //                                                 // onClick={() => handdleSelectButtonActions(
        //                                                 //     btn.button,
        //                                                 //     btn.action,
        //                                                 //     item.id,
        //                                                 // )}
                                                        
        //                                             />
        //                                         ))}
        //                                     </ButtonContainerGrid>
        //                                 </td>
        //                                 :
        //                                 <td key={index}></td>
        //                         ) )}
        //                         </TableRows>
        //                     ))}
        //                 </tbody>
        //             </TableContainer>
        //         </>
        //     }
        // </Container>
        <>
            <TableSSS>
                
            </TableSSS>
        </>
    )
};