"use client";
import styles from "./DrawerMenu.module.scss";
import { navLinks } from "@/links/navLinks";
import { FC } from "react";
import Link from "next/link";
import Auth from "@/pageComponents/Auth/Auth";
import Authorizations from "@/components/Authorizations/Authorizations";
import { AnimatePresence, motion } from "framer-motion";

const DrawerMenu: FC<{ isMenu: boolean }> = ({ isMenu }) => {
    return (
        <AnimatePresence>
            {isMenu && (
                <motion.div
                    className={styles.main}
                    initial={{ x: "900px" }}
                    animate={{ x: 0 }}
                    exit={{ x: "900px" }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={styles.main__navLinks}>
                        {navLinks.map((item) => (
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
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DrawerMenu;
