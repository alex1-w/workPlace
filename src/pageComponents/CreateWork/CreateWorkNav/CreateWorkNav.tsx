import styles from "./CreateWorkNav.module.scss";
import { createWorkNav } from "@/links/navLinks";
import { FC } from "react";
import cn from "classnames";

export const CreateWorkNav: FC<{
  setStep: (step: number) => void;
  step: number;
}> = ({ setStep, step }) => {
  const changeStep = (step: number) => setStep(step);

  return (
    <nav className={styles.main}>
      <ul>
        {createWorkNav.map((item, i) => (
          <li key={i} className={styles.step} onClick={() => changeStep(i)}>
            <div className={styles.step__main}>
              <div
                className={cn(styles.step__num, step === i && styles.active)}
              >
                <p>{i + 1}</p>
              </div>
              <p className={styles.step__name}>{item.name}</p>
            </div>

            <div className={styles.line}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
