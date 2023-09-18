import styles from "./Instruction.module.scss";
import { FC } from "react";
import InstructionCard from "./InstructionCard/InstructionCard";
import { instructions } from "@/links/instruction";

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
