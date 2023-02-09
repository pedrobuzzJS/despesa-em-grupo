import React, { useState, useCallback } from "react";
import { SnackBarContainer, Snack } from "./style";

export const SnackBar: React.FC = () => {
    return (
        <>
            <SnackBarContainer>
                <Snack>
                </Snack>
                <Snack>
                </Snack>
                <Snack>
                </Snack>
                <Snack>
                </Snack>
            </SnackBarContainer>
        </>
    );
};