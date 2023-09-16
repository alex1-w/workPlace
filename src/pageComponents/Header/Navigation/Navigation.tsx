import styles from "./Navigation.module.scss";
import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/stock",
    name: "Биржа",
  },
  {
    href: "#work",
    name: "Ворки",
  },
  {
    href: "/",
    name: "Конкурсы",
  },
  {
    href: "/create-work",
    name: "Создать ворк",
  },
  {
    href: "/create-order",
    name: "Создать заказ",
  },
];

export default function Navigation() {
  return (
    <nav className={styles.main}>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <p>{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
