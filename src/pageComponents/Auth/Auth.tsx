"use client";
import styles from "./Auth.module.scss";
import Image from "next/image";
import { FC } from "react";
import loginImage from "@/icons/authImage.png";
import registrationImage from '@/icons/registrationImage.png'
import { Logo } from "@/components/Logo/Logo";
import { Login } from "./Login/Login";
import { usePathname } from "next/navigation";
import Registration from "./Registration/Registration";
import HomePage from "../HomePage/HomePage";

const Auth: FC = () => {
    const pathname = usePathname();
    console.log(pathname);
    const imageVariant = pathname === '/login' ? loginImage : pathname === '/registration' ? registrationImage : ''

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__pageVariant}>
                    <Logo />
                    {pathname === "/login" ? (
                        <Login />
                    ) : pathname === "/registration" ? (
                        <Registration />
                    ) : (
                        <HomePage />
                        // сделать not-found
                    )}
                </div>

                <div className={styles.imgBlock}>
                    <Image alt="authImage" src={imageVariant} fill />
                </div>
            </div>
        </main>
    );
};

export default Auth;
