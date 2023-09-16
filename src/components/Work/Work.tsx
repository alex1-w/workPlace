import styles from "./Work.module.scss";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../UI/Button/Button";
import image from "../../icons/profileImg.png";
import Link from "next/link";
import LinkButton from "../UI/LinkButton/LinkButton";

interface IWork {
    title: string;
    description: string;
    img: any
    id: number
}

const Work: FC<IWork> = ({ description, id, img, title }) => {
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <Image src={img} width="44" height="44" alt="profileImage" />
                <p>{title}</p>
            </div>

            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <LinkButton link="/" name="Написать" styleVariant="miniLink" />
        </div>
    );
};

export default Work;
