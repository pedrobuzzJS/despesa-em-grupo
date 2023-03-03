import { FieldAction } from "./FieldAction";
export interface GridFields {
    field: string;
    title: string;
    description: string;
    type: number;
    hidden?: boolean;
    key?: boolean;
    collor?: string;
    buttons?: FieldAction[];
};
export class FieldTypes {
  public static TEXT = 1;
  public static BUTTON = 2;
  public static BOOLEAN = 3;
  public static COLOR = 4;
  public static CHECKBOX = 5;
};