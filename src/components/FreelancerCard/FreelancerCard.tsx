import Image from "next/image";
import { Button } from "../UI/Button/Button";
import LinkButton from "../UI/LinkButton/LinkButton";
import styles from "./FreelancerCard.module.scss";
import { FC } from "react";
import { IFreelancer } from "@/types/IFreelancer";
import Link from "next/link";


const FreelancerCard: FC<IFreelancer> = ({
    countProject,
    id,
    name,
    profession,
    rating,
    img,
}) => {
    return (
        <Link href='user-profile' className={styles.main}>
            <div className={styles.mainContent}>
                <Image alt="profileIcon" src={img} width={150} height={150} />
                <div className={styles.cardDescription}>
                    <p>{name}</p>
                    <p>{profession}</p>
                    <p>выпонено проектов: {countProject}</p>
                </div>
            </div>
            <LinkButton link="/chat" styleVariant="miniLink" name="Написать" />
        </Link>
    );
};

export default FreelancerCard;
