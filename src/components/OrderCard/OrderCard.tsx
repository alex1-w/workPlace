import styles from "./OrderCard.module.scss";
import { FC } from "react";
import { IOrder } from "@/types/IOrder";
import Image from "next/image";
import Link from "next/link";
import StarsBlock from "../StarsBlock/StarsBlock";

export const OrderCard: FC<IOrder> = ({
    owner,
    price,
    title,
    createdAt,
    offers,
}) => {
    return (
        <Link href="/customer-order" className={styles.main}>
            
            <div className={styles.mainInfo}>
                <p>{title}</p>

                <div className={styles.customerInfo}>
                    <Image alt={owner.name} src={owner.img} width={120} height={120} />

                    <div>
                        <p>{owner.name}</p>
                        <p>Размещено проектов на бирже: {owner.countProject}</p>
                        <StarsBlock ratingCount={owner.rating} />
                    </div>
                </div>
            </div>

            <div className={styles.additionalInfo}>
                <div>
                    <p>Бюджет: {price} тенге</p>
                    <p>{createdAt}</p>
                </div>
                <p>Предложений: {offers}</p>
            </div>

        </Link>
    );
};
