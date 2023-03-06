import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Button } from "../Form/Button/Button";
import { ButtonContainer, ButtonContainerGrid, Container, StyledTable, Tbody, TbodyTR, TbodyTRTD, Thead, TheadTH, TheadTR } from "./style";

interface GridProps {
    columns: GridFields[],
    initialData: any,
    loading?: boolean,
    pathMantencao?: string;
};

export const DataGrid: React.FC<GridProps> = ({ columns, initialData, loading, pathMantencao, ...props }) => {
    const teste: any[] = initialData; 
    const navigate = useNavigate();

    const buttonInserFormValues = useCallback( (op: number) => {
        let url = pathMantencao + "-manutencao" + `/${op}`;
        return navigate("/"+url);
    }, [navigate, pathMantencao] );

    return (
        <>
            <Container>
                {loading ? 
                <h1>Carregando</h1> 
                :
                <>
                    <ButtonContainer>
                        {/* <Button
                            buttonDescription="Inserir"
                                onClick={() => buttonInserFormValues(2)}
                        /> */}
                    </ButtonContainer>
                    <StyledTable>
                        <Thead>
                            <TheadTR>
                                {columns && columns.map( (column, index) => (
                                <TheadTH
                                    key={index}
                                >
                                    {column.title}
                                </TheadTH>
                                ) )}
                            </TheadTR>
                        </Thead>
                        <Tbody>
                            {/* <TbodyTR>
                                <TbodyTRTH>01</TbodyTRTH>
                            </TbodyTR> */}
                            {teste && teste?.map((item, index) => (
                            <TbodyTR
                                key={index}
                                isOdd={Boolean(index%2)}
                            >
                                {columns && columns.map( (column, index) => (
                                    column.type === FieldTypes.TEXT
                                ?
                                    <TbodyTRTD
                                        key={index}
                                    >
                                        {item[column?.field]}
                                    </TbodyTRTD>
                                :
                                column.type === FieldTypes.BUTTON
                                ?
                                <TbodyTRTD
                                    key={index}
                                >
                                    <ButtonContainerGrid
                                        key={index}
                                    >
                                        {column.buttons?.map((btn, index) => (
                                            <Button
                                                key={index}
                                                buttonDescription={btn.title}
                                                dropDownOption={btn.dropDownButtons}
                                            />
                                        ))}
                                    </ButtonContainerGrid>
                                </TbodyTRTD>
                                :
                                <TbodyTRTD
                                    key={index}
                                >
                                </TbodyTRTD>
                                ) )}
                            </TbodyTR>
                            ))}
                        </Tbody>
                    </StyledTable>
                </>
                }
            </Container>
        </>
    )
};