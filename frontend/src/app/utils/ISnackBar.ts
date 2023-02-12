export interface ISnackBar {
    type: "Success" | "Info" | "Warning" | "Error" | "Default";
    message: string;
    order?: number;
    callback?: () =>void;
};