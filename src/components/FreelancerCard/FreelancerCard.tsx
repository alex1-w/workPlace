import styles from "./FreelancerCard.module.scss";
import Image from "next/image";
import { Button } from "../UI/Button/Button";
import LinkButton from "../UI/LinkButton/LinkButton";
import { FC } from "react";
import { IFreelancer } from "@/types/IFreelancer";
import Link from "next/link";
import CardWrapper from "../CardWrapper/CardWrapper";

const FreelancerCard: FC<IFreelancer> = ({
    countProject,
    id,
    name,
    profession,
    rating,
    img,
}) => {
    return (
        <Link href="user-profile">
            <CardWrapper>

                <div className={styles.main}>

                    <div className={styles.mainContent}>

                        <Image alt="profileIcon" src={img} />

                        <div className={styles.cardDescription}>
                            <p>{name}</p>
                            <p>{profession}</p>
                            <p>выпонено проектов: {countProject}</p>
                        </div>
                    </div>
                    <LinkButton link="/chat" styleVariant="miniLink" name="Написать" />

                </div>

            </CardWrapper>
        </Link>
    );
};

export default FreelancerCard;
