"use client";
import styles from "./Auth.module.scss";
import Image from "next/image";
import { FC } from "react";
import authImage from "@/icons/authImage.png";
import { Logo } from "@/components/Logo/Logo";
import { Login } from "./Login/Login";
import { usePathname } from "next/navigation";
import Registration from "./Registration/Registration";
import HomePage from "../HomePage/HomePage";

const Auth: FC = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div>
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
                    <Image alt="authImage" src={authImage} fill />
                </div>
            </div>
        </main>
    );
};

export default Auth;
