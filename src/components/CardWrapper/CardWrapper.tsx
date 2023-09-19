import styles from './CardWrapper.module.scss';
import React, { FC } from "react"

const CardWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
};

export default CardWrapper;
