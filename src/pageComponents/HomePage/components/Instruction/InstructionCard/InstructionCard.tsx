import styles from "./InstructionCard.module.scss";
import { FC } from "react";

interface IInstructionCard {
  img: any;
  title: string;
  description: string;
}

const InstructionCard: FC<IInstructionCard> = ({ description, img, title }) => {
  return (
    <div className={styles.main}>
      {img}
      <p>{title}</p>

      <div>{description}</div>
    </div>
  );
};

export default InstructionCard;
