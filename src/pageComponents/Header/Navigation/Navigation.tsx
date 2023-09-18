import { navLinks } from "@/links/navLinks";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav className={styles.main}>
      <ul>
        {navLinks.map((link) => (
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
