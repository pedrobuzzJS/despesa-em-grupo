import React, { useState, useCallback } from "react";
import { Toast } from "./style";
import { IToast } from "../../utils/ISnackBar";

export const ToastBar: React.FC<IToast> = ({ type, message, ...props }) => {
    return (
        <Toast
            type={type}
        >
            <h1>{type}</h1>
            <h1>{message}</h1>
        </Toast>
    );
};