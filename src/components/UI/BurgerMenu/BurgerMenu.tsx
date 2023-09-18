'use client'
import styles from "./BurgerMenu.module.scss";
import { FC, useState } from "react";
import DrawerMenu from "./DrawerMenu/DrawerMenu";

const BurgerMenu: FC = () => {
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const changeIsMenu = () => {
        setIsMenu(!isMenu)
    }

    return (
        <div className={styles.main}>
            <div className={styles.burger} onClick={changeIsMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {isMenu && <DrawerMenu />}
        </div>
    );
};

export default BurgerMenu;
