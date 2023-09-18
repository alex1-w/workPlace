import styles from "./PromoStarting.module.scss";
import { FC } from "react";
import PromoStartingItem from "./PromoStartingItem/PromoStartingItem";
import { Container } from "@/components/Container/Container";
import LinkButton from "@/components/UI/LinkButton/LinkButton";
import officeImage from "@/icons/officeImage.png";
import Image from "next/image";
import { promoStartingItems } from "@/links/promoStartingLinks";


const PromoStarting: FC = () => {
    return (
        <section className={styles.main}>
            <Container>
                <div className={styles.wrapper}>
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
            </Container>
        </section>
    );
};

export default PromoStarting;
