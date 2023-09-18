import styles from "./FieldBlock.module.scss";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { Field } from "../Field/Field";
import { FC } from "react";

interface IFieldBlock {
    title: string;
    name: string
    placeholder: string
    type: string
    register?: UseFormRegister<any>;
    errors?: string | undefined;
    rules?: RegisterOptions;
}

const FieldBlock: FC<IFieldBlock> = ({ title, name, placeholder, type, errors, register, rules }) => {
    return (
        <div className={styles.main}>
            <p> {title}</p>
            <div className={styles.inputBlock}>
                <Field
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    rules={rules}
                    register={register}
                    variant="formVariant"
                />
                <div className={styles.errorBlock}> {errors && <p>{errors}</p>}</div>
            </div>
        </div>
    )
};

export default FieldBlock;
