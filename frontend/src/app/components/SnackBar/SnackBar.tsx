import React, { useState, useCallback } from "react";
import { Snack } from "./style";
import { ISnackBar } from "../../utils/ISnackBar";

export const SnackBar: React.FC<ISnackBar> = ({ type, message, ...props }) => {
    return (
        <Snack
            type={type}
        >
            <h1>{type}</h1>
            <h1>{message}</h1>
        </Snack>
    );
};