import styles from "./PromoStarting.module.scss";
import {
    promoStartingIconOne,
    promoStartingIconThree,
    promoStartingIconTwo,
} from "@/icons/icons";
import { FC } from "react";
import PromoStartingItem from "./PromoStartingItem/PromoStartingItem";
import { Container } from "@/components/Container/Container";
import LinkButton from "@/components/UI/LinkButton/LinkButton";
import officeImage from "@/icons/officeImage.png";
import Image from "next/image";

const promoStartingItems = [
    {
        title: "Оплачивайте с р/с или карты компании",
        img: promoStartingIconOne,
    },
    {
        title: "Экономьте до 87% бюджета на фрилансе",
        img: promoStartingIconTwo,
    },
    {
        title: "Экономьте до 75% времени на решении фриланс задач",
        img: promoStartingIconThree,
    },
];

const PromoStarting: FC = () => {
    return (
        <section className={styles.main}>
            <Container>
                <div className={styles.wrapper}>
                    <div>
                        <h3>Как WorkTap помогает бизнесу?</h3>
                        <div className={styles.promoCards}>
                            {promoStartingItems.map((item) => (
                                <PromoStartingItem
                                    img={item.img}
                                    title={item.title}
                                    key={item.title}
                                />
                            ))}
                        </div>

                        <h5>WorkTap — быстро, просто и безопасно!</h5>
                        <LinkButton link="/" name="Начать!" styleVariant="violetVariant" />
                    </div>
                    <div className={styles.imgBlock}>
                        <Image alt="officeImage" src={officeImage} fill />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PromoStarting;
