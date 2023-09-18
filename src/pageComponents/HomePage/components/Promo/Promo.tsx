import styles from "./Promo.module.scss";
import Image from "next/image";
import React from "react";
import promoImage from "@/icons/promo.png";
import Link from "next/link";
import { Field } from "@/components/UI/Field/Field";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

export const tags = [
    {
        name: "Тексты и переводы",
        link: "/",
    },
    {
        name: "Разработка",
        link: "/",
    },
    {
        name: "Дизайн",
        link: "/",
    },
    {
        name: "Аудио, видео монтаж",
        link: "/",
    },
    {
        name: "SEO и оптимизация",
        link: "/",
    },
    {
        name: "Бизнес и жизнь",
        link: "/",
    },
    {
        name: "Соцсети и реклама",
        link: "/",
    },
];

export default function Promo() {
    return (
        <section className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.textContent}>
                    <div>
                        <h1>
                            Покупайте фриланс-услуги в&nbsp;
                            <span>
                                <Link href="/">два клика</Link>
                            </span>
                        </h1>
                        <div className={styles.textContent__subTitle}>
                            <h2>
                                Ворк — единица работы продавца, которую можно купить как товар в
                                магазине
                            </h2>
                        </div>
                    </div>

                    <div className={styles.searchBlock}>
                        <Field name="search" type="text" placeholder="Что нужно сделать?" />
                        <p>Выберите рубрику чтобы начать</p>

                        <div className={styles.searchBlock__tagsBlock}>
                            {tags.map((tag) => (
                                <LinkButton
                                    link={tag.link}
                                    name={tag.name}
                                    styleVariant="tagLink"
                                    key={tag.name}
                                />
                            ))}
                            <Link
                                href="/"
                                className={styles.searchBlock__tagsBlock__allCategoryLink}
                            >
                                <p>Все категории</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.imgBlock}>
                    <Image alt="d" src={promoImage} />
                </div>
            </div>
        </section>
    );
}
