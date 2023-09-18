import styles from "./Authorizations.module.scss";
import Link from "next/link";
import React, { FC } from "react";

const Authorizations: FC<{ variant?: "headerVariant" | "burgerVariant" }> = ({ variant = "headerVariant" }) => {
    return (
        <div className={styles[variant]}>
            <Link href="/registration">
                <p>Регистрация</p>
            </Link>
            <Link href="/login">
                <p>Войти</p>
            </Link>
        </div>
    );
}

export default Authorizations