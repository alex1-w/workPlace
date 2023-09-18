import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IField {
    name: string;
    placeholder: string;
    type: string;
    btnName?: string;
    variant?: "withButton" | "simple" | "formVariant";
    register?: UseFormRegister<any>;
    errors?: string | undefined;
    rules?: RegisterOptions;
}