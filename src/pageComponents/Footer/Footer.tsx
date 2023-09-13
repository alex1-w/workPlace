import {
    aboutLinks,
    socialsLinks,
    supportLinks,
    topCategories,
} from "@/links/links.data";
import styles from "./Footer.module.scss";
import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
    return (
        <footer className={styles.main}>
            <div className={styles.topPart}>
                <div className={styles.topPart__item}>
                    <h6>Топ категории</h6>
                    <ul>
                        {topCategories.map((item) => (
                            <li key={item.title}>
                                <Link href={item.link}>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.topPart__item}>
                    <h6>О Проекте</h6>
                    <ul>
                        {aboutLinks.map((item) => (
                            <li key={item.title}>
                                <Link href={item.link}>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.topPart__item}>
                    <h6>Поддержка</h6>
                    <ul>
                        {supportLinks.map((item) => (
                            <li key={item.title}>
                                <Link href={item.link}>
                                    <p>{item.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.topPart__item}>
                    <h6>Follow</h6>
                    <ul className={styles.socialsBlock}>
                        {socialsLinks.map((item) => (
                            <li key={item.title}>
                                <Link href={item.link} >
                                    {item.img}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.bottomPart}>
                <p>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer; 
