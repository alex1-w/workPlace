"use client";
import styles from "./Login.module.scss";
import Image from "next/image";
import { Field } from "@/components/UI/Field/Field";
import { Logo } from "@/components/Logo/Logo";
import Link from "next/link";
import { Button } from "@/components/UI/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData } from "@/types/AuthForm.interface";
import FieldBlock from "@/components/UI/FieldBlock/FieldBlock";
import { nameRule } from "@/formRules/formRules";

export const Login = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<LoginData>({
        mode: "onBlur",
        reValidateMode: "onChange",
        defaultValues: {
            login: "",
            password: "",
        },
    });

    const submit: SubmitHandler<LoginData> = (body) => {
        console.log(body);
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={styles.main}>
            <p>Добро пожаловать!</p>
            <h1>Войдите в свой аккаунт</h1>

            <FieldBlock
                title="E-mail"
                placeholder="E-mail"
                name="login"
                type="text"
                register={register}
                errors={errors?.login?.message}
                rules={nameRule}
            />
            {/* реализовать проверку email */}

            <FieldBlock
                register={register}
                name="password"
                placeholder="password"
                type="text"
                errors={errors?.password?.message}
                rules={nameRule}
                title="Пароль"
            />

            <div className={styles.rememberMeBlock}>
                <div>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">запомнить меня</label>
                </div>

                <Link href="/">
                    <p>забыли пароль?</p>
                </Link>
            </div>

            <Button
                name="Войти"
                type="submit"
                variant="linkVariant"
                isValid={isValid}
            />

            <div className={styles.linkToRegistrationBlock}>
                <p>У вас не аккаунта?</p>
                <Link href="/registration">
                    <p>Зарегистрируйтесь!</p>
                </Link>
            </div>
        </form>
    );
};
