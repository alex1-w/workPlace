'use client'
import { navLinks } from "@/links/navLinks";
import styles from "./DrawerMenu.module.scss";
import { FC, useState } from "react";
import Link from "next/link";
import Auth from "@/pageComponents/Auth/Auth";
import Authorizations from "@/components/Authorizations/Authorizations";
// import { Authorizations } from "@/pageComponents/Header/Authorizations/Authorizations";

const DrawerMenu: FC = () => {

    return (
        <div className={styles.main}>
            <div className={styles.main__navLinks}>
                {navLinks.map(item => (
                    <Link key={item.name} href={item.href}>
                        <div>
                            <p>{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div>
                <Authorizations variant="burgerVariant" />
            </div>
        </div>
    );
};

export default DrawerMenu;
