import styles from "./Button.module.scss";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";

type styleVariant = "linkVariant" | "filterBtn";

interface IButtonProps {
    type: string;
    variant: styleVariant;
    name: string;
}

export const Button: FC<
    IButtonProps &
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = ({ variant, type, name, ...rest }) => {
    return (
        <div className={styles.main}>
            <button
                type={type}
                className={cn(styles.main, styles[variant])}
                {...rest}
            >
                <p>{name}</p>
            </button>
        </div>
    );
};
