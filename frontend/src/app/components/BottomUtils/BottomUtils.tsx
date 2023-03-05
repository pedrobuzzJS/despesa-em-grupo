import React, { PropsWithChildren, useState } from "react";
import { BottomUtilsCloseButton, Container } from "./styles";

interface BottomUtilsProp extends PropsWithChildren {};

export const BottomUtils: React.FC<BottomUtilsProp> = ({children}) => {
    const [ isBottomUtilsOpen, setIsBottomUtilsOpen ] = useState<boolean>(false);
    const toggleBottomUtils = () => setIsBottomUtilsOpen(!isBottomUtilsOpen);

    return (
        <Container
            disabled={isBottomUtilsOpen}
        >
            <BottomUtilsCloseButton
                onClick={toggleBottomUtils}
            />
            {children}
        </Container>
    );
};