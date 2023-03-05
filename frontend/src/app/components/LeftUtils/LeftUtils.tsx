import React, { PropsWithChildren, useState } from "react";
import { Container, LeftUtilsCloseButton } from "./style";

interface LeftUtilsProp extends PropsWithChildren {};

export const LeftUtils: React.FC<LeftUtilsProp> = ({children}) => {
    const [ isLeftUtilsOpen, setIsLeftUtilsOpen ] = useState<boolean>(false);
    const toggleLeftUtils = () => setIsLeftUtilsOpen(!isLeftUtilsOpen);

    return (
        <Container
            disabled={isLeftUtilsOpen}
        >
            <LeftUtilsCloseButton
                onClick={toggleLeftUtils}
            />
            {children}
        </Container>
    );
};