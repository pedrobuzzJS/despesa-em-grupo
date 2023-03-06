import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Operation } from "../../utils/Operation";
import { Button } from "../Form/Button/Button";
import { ButtonContainer, ButtonContainerGrid, Container, OrderColumnIcon, StyledTable, Tbody, TbodyTR, TbodyTRTD, TbodyTRTH, Thead, TheadTH, TheadTR } from "./style";

interface GridProps {
    columns: GridFields[],
    initialData: any,
    loading?: boolean,
    pathMantencao?: string;
};

interface OrderProps {
    name: string;
    order: boolean;
}

export const DataGrid: React.FC<GridProps> = ({ columns, initialData, loading, pathMantencao, ...props }) => {
    const teste: any[] = initialData;
    const navigate = useNavigate();
    const [ order, setOrder ] = useState<OrderProps[]>(
        [
            {
                name: "id",
                order: false,                
                
            },
            {
                name: "name",
                order: false,                
                
            },
            {
                name: "route",
                order: false,                
                
            },
            {
                name: "icon",
                order: false,                
                
            },
            {
                name: "parent_id",
                order: false,                
                
            },
            {
                name: "status_id",
                order: false,                
                
            },
        ]
    );

    const toggleSetOrder = useCallback(() => {
    }, []);

    const findValueById = useCallback((values: OrderProps[], key: any) => {
        const tt = values[values?.findIndex(item => item.name === key)]?.order;
        return tt;
    }, []);

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
                        <Button
                            buttonDescription="Inserir"
                            onClick={() => buttonInserFormValues(Operation.INSERT)}
                        />
                    </ButtonContainer>
                    <StyledTable>
                        <Thead>
                            <TheadTR>
                                {columns?.map( (column, index) => (
                                <TheadTH
                                    key={index}
                                >
                                    {column.title}
                                    <OrderColumnIcon
                                       up={findValueById(order, column.field)}
                                    />
                                </TheadTH>
                                ) )}
                            </TheadTR>
                        </Thead>
                        <Tbody>
                            {teste && teste?.map((item, index) => (
                            <TbodyTR
                                key={index}
                                isOdd={Boolean(index%2)}
                            >
                                {columns?.map( (column, index) => (
                                    column.type === FieldTypes.TEXT
                                ?
                                    <TbodyTRTD
                                        key={index}
                                    >
                                        {item[column?.field]}
                                    </TbodyTRTD>
                                :
                                column.type === FieldTypes.KEY
                                ?
                                <TbodyTRTH
                                    key={index}
                                >
                                    {item[column?.field]}
                                </TbodyTRTH>
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