"use client";
import styles from "./PriceItem.module.scss";
import { arrowDownIcon } from "@/icons/icons";
import { IPriceVariant } from "@/types/IPriceVariant";
import { FC, useRef, useState } from "react";
import { DiscloserData } from "@/components/UI/DiscloserData/DiscloserData";
import { motion, AnimatePresence } from "framer-motion";
import { currencyFormatter } from "@/helpers/currencyFormatter";

export const PriceItem: FC<IPriceVariant> = ({
    additionalOptions,
    description,
    name,
    price,
    reworkCount,
    timeFrame,
}) => {
    const [isDiscloserText, setIsDiscloserText] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    const showText = (e: any) => {
        e.stopPropagation();
        setIsDiscloserText(!isDiscloserText);
        ref?.current?.classList.toggle(styles.active);
    };

    return (
        <div className={styles.main}>
            <div className={styles.head} onClick={(e) => showText(e)} ref={ref}>
                <p>{name}</p>
                {arrowDownIcon}
            </div>

            <AnimatePresence>
                {isDiscloserText && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className={styles.mainContent}
                    >
                        <p>{description}</p>

                        <div className={styles.mainContent__head}>
                            <p>{currencyFormatter(price)}</p>
                            <p>Сделаю за {timeFrame} дней</p>
                        </div>

                        <p>количество доработок: {reworkCount}</p>

                        <div className={styles.mainContent__additional}>
                            <p>Дополнительные опции</p>
                            <div>
                                {additionalOptions.map((item, i) => (
                                    <DiscloserData
                                        title={item.name}
                                        text={item.description}
                                        key={i}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
