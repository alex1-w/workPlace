import styles from "./StepSix.module.scss";
import Image from "next/image";
import createWorkImage from "@/icons/createWorkImage.png";

export const StepSix = () => {
  return (
    <main className={styles.main}>
      <h1>Поздравляем!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et
        volutpat sagittis, turpis sed cum massa.
      </p>

      <Image alt="createWorkImage" src={createWorkImage} />
    </main>
  );
};
