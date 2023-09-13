import styles from "./HomePage.module.scss";
import React from "react";
import { Container } from "@/components/Container/Container";
import Promo from "./components/Promo/Promo";
import ActualWorks from "./components/ActualWorks/ActualWorks";
import TopFreelancers from "./components/TopFreelancers/TopFreelancers";
import Instruction from "./components/Instruction/Instruction";
import PromoStarting from "./components/PromoStarting/PromoStarting";

export default function HomePage() {
    return (
        <main className={styles.main}>
            <Promo />
            <Container>
                <div className={styles.main__containerSections}>

                    <ActualWorks />
                    <TopFreelancers />
                    <Instruction />

                </div>
            </Container>
            <PromoStarting />
        </main>
    );
}
