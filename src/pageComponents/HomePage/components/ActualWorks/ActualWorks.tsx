import styles from "./ActualWorks.module.scss";
import Work from "@/components/Work/Work";
import { FC } from "react";
import image from "@/icons/profileImg.png";
import Link from "next/link";
import LinkButton from "@/components/UI/LinkButton/LinkButton";

const works = [
  {
    title: "Верстка landing page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
    img: image,
    id: 1,
  },
  {
    title: "Сделать дизайн сайта-каталога и посадить на какой нибудь ко...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
    img: image,
    id: 2,
  },
  {
    title: "Сделать дизайн интернет-магазина",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
    img: image,
    id: 3,
  },
  {
    title: "Продвижение instagram ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
    img: image,
    id: 4,
  },
  {
    title: "Срочно! Нужен веб дизайнер!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...",
    img: image,
    id: 5,
  },
];

const ActualWorks: FC = () => {
  return (
    <section className={styles.main}>
      <h2>Актуальные ворки</h2>
      <div className={styles.worksBlock}>
        {works.map((work) => (
          <Work
            description={work.description}
            id={work.id}
            img={work.img}
            title={work.title}
            key={work.id}
          />
        ))}
        <LinkButton link="/" name="Смотреть все ворки" styleVariant="bigLink" />
      </div>
    </section>
  );
};

export default ActualWorks;
