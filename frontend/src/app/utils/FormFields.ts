import { FormInputTypes } from "../components/Form/Inputs/InputDefault/InputDefault";
import { Cols } from "../components/GridLayout/Grid/Grid";
import { SelectList } from "./SelectList";

export interface FormInputs {
    value?: any;
    values?: any[];
    key?: Boolean;
    isChave?: boolean;
    label?: string;
    required?: boolean;
    type?: FormInputTypes | string | any;
    placeholder?: string;
    options?: SelectList[] | any;
    disabled?: boolean;
    hint?: string;
    hiden?: boolean;
    description?: string;
    icon?: string;
    span?: string;
    name?: string;
    id?: string;
    pixels?: string;
    list?: any;
    cols: Cols;
};

export class InputType {
    public static TEXT = "text";
    public static EMAIL = "email";
    public static PASSWORD = "password";
    public static BUTTON = "button";
    public static COLOR = "color";
    public static FILE = "file";
    public static CPF = "cpf";
    public static CURRENCY = "currency";
    public static CEP = "cep";
    public static DATE = "date";
    public static NUMBER = "number";
    public static CHECKBOX = "checkbox";
    public static RADIO = "radio";
    public static SELECT = "select";
    public static TEXTAREA = "textarea";
};