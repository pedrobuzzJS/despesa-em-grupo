import { DisableButtonCondition } from "./DisableButtonCondition";

export interface FieldAction {
    id?: number;
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
};