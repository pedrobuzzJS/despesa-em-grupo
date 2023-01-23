import React from "react";
import { SnackBarContainer } from "./style";

interface SnackBarProps {
    type?: "Success" | "Info" | "Warning" | "Error";
    open: boolean;
    children: React.ReactNode;
    onClose: () => void;
};

export const SnackBar: React.FC<SnackBarProps> = ({ type, open, children, onClose }) => {
    return (
        <SnackBarContainer
            open={open}
            type={type}
        >
            {children}
            <button className="close" onClick={onClose}>
                Fechar
            </button>
        </SnackBarContainer>
    );
};