import { Button } from "@/components/UI/Button/Button";
import styles from "./Registration.module.scss";
import FieldBlock from "@/components/UI/FieldBlock/FieldBlock";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegistrationForm } from "@/types/AuthForm.interface";
import { nameRule } from "@/formRules/formRules";


const Registration: FC = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<IRegistrationForm>({
        mode: "onBlur",
        reValidateMode: "onBlur",
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            phoneNumber: 0,
            repeatPassword: "",
        },
    });

    const submit: SubmitHandler<IRegistrationForm> = (body) => {
        console.log(body);
        if(body.password !== body.repeatPassword) return 
    };

    return (
        <form className={styles.main} onSubmit={handleSubmit(submit)}>
            <p>Давайте создадти ваш аккаунт</p>
            <h1>Заполните все поля</h1>

            <div>
                <FieldBlock
                    title="Ваше имя"
                    name="name"
                    placeholder="Имя"
                    type="text"
                    errors={errors?.name?.message}
                    register={register}
                    rules={nameRule}
                />
                <FieldBlock
                    name="surname"
                    placeholder="фамилия"
                    title="Ваша фамилия"
                    type="text"
                    errors={errors?.surname?.message}
                    register={register}
                    rules={nameRule}
                />
                <FieldBlock
                    name="email"
                    placeholder="E-mail"
                    title="E-mail"
                    type="text"
                    errors={errors?.email?.message}
                    register={register}
                    rules={{}}
                />
                <FieldBlock
                    name="phoneNumber"
                    placeholder="Номер телефона"
                    title="phone number"
                    type="number"
                    errors={errors?.phoneNumber?.message}
                    register={register}
                    rules={{}}
                />
                <FieldBlock
                    name="password"
                    placeholder="Пароль"
                    title="Пароль"
                    type="text"
                    errors={errors?.password?.message}
                    register={register}
                    rules={{}}
                />
                <FieldBlock
                    name="repeatPassword"
                    placeholder="Пароль"
                    title="Повторите пароль"
                    type="text"
                    errors={errors?.repeatPassword?.message}
                    register={register}
                    rules={{}}
                />
            </div>

            <Button
                isValid={isValid}
                name="Зарегитрируйтесь"
                type="submit"
                variant="linkVariant"
            />
        </form>
    );
};

export default Registration;
