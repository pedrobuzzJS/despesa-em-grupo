import React, { PropsWithChildren, useState } from "react";
import { Container, TopUtilsCloseButton } from "./style";

interface TopUtilsProp extends PropsWithChildren {
    isOpen: boolean;
};

export const TopUtils: React.FC<TopUtilsProp> = ({children, isOpen, ...props}) => {
    const [ isTopUtilsOpen, setIsTopUtilsOpen ] = useState<boolean>(isOpen);
    const toggleTopUtils = () => setIsTopUtilsOpen(!isTopUtilsOpen);

    return (
        <Container
            disabled={isTopUtilsOpen}
        >
            <TopUtilsCloseButton
                onClick={toggleTopUtils}
            />
            {children}
        </Container>
    );
};