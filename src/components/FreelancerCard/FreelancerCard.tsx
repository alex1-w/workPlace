import Image from "next/image";
import { Button } from "../UI/Button/Button";
import LinkButton from "../UI/LinkButton/LinkButton";
import styles from "./FreelancerCard.module.scss";
import { FC } from "react";

interface IFreelancerCard {
    name: string;
    profession: string;
    countProject: number;
    rating: number;
    id: number;
    img: any;
}

const FreelancerCard: FC<IFreelancerCard> = ({
    countProject,
    id,
    name,
    profession,
    rating,
    img,
}) => {
    return (
        <div className={styles.main}>
            <div className={styles.mainContent}>
                <Image alt="profileIcon" src={img} width={150} height={150} />
                <div className={styles.cardDescription}>
                    <p>{name}</p>
                    <p>{profession}</p>
                    <p>выпонено проектов: {countProject}</p>
                </div>
            </div>
            <LinkButton link="/" styleVariant="miniLink" name="Написать" />
        </div>
    );
};

export default FreelancerCard;
