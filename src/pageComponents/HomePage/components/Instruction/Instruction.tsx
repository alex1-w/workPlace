import styles from "./Instruction.module.scss";
import {
    instructionIconOne,
    instructionIconThree,
    instructionIconTwo,
} from "@/icons/icons";
import { FC } from "react";
import InstructionCard from "./InstructionCard/InstructionCard";

const instructions = [
    {
        title: "Выберите услугу",
        description:
            "В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.",
        img: instructionIconOne,
    },
    {
        title: "Оплатите",
        description:
            "Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. ",
        img: instructionIconTwo,
    },
    {
        title: "Получите результат",
        description:
            "Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.",
        img: instructionIconThree,
    },
];

const Instruction = () => {
    return (
        <section className={styles.main}>
            <div>
                <h3>Как решать задачи на WorkTap?</h3>
                <h4>Идеально подходит для бизнеса и частных лиц</h4>
            </div>
            <div className={styles.instructionCardBlock}>

                {instructions.map((item) => (
                    <InstructionCard
                        description={item.description}
                        img={item.img}
                        title={item.title}
                        key={item.title}
                    />
                ))}
            </div>
        </section>
    );
};

export default Instruction;
