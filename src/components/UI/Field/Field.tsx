import styles from "./Field.module.scss";
import { FC, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IField } from "./IField";

export const Field: FC<
    IField &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({
    rules,
    errors,
    register,
    variant = "withButton",
    name,
    placeholder,
    btnName = "Найти",
    ...rest
}) => {
        return (
            <div className={styles[variant]}>
                <div>
                    <input
                        {...(register && register(name, { ...rules }))}
                        name={name}
                        {...rest}
                        placeholder={placeholder}
                    />
                </div>

                <button>
                    <p>{btnName}</p>
                </button>
            </div>
        );
    };
