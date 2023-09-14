import styles from "./LinkButton.module.scss";
import Link from "next/link";
import { FC } from "react";
import cn from "classnames";

interface ILinkButton {
  link: string;
  name: string;
  styleVariant: "bigLink" | "miniLink" | "violetVariant" | "tagLink";
}

const LinkButton: FC<ILinkButton> = ({ link, name, styleVariant }) => {
  return (
    <Link href={link} className={cn(styles[styleVariant])}>
      <p>{name}</p>
    </Link>
  );
};

export default LinkButton;
