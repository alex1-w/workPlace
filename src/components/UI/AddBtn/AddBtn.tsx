import styles from "./AddBtn.module.scss";
import { plusIcon } from "@/icons/icons";
import { FC, ButtonHTMLAttributes } from "react";

interface IAddBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const AddBtn: FC<IAddBtn> = ({ title, ...rest }) => {
  return (
    <button className={styles.main} {...rest}>
      {plusIcon}
      {title}
    </button>
  );
};
