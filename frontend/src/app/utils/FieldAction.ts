import { ButtonHTMLAttributes } from "react";
import { DisableButtonCondition } from "./DisableButtonCondition";
export interface FieldAction extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: any;
    button: string;
    action: number;
    rotina?: string;
    title: string;
    icon?: string;
    active?: boolean;
    hint?: string;
    color?: string;
    order?: number;
    disableCondition?: DisableButtonCondition;
    dropDownButtons?: FieldAction[];
};