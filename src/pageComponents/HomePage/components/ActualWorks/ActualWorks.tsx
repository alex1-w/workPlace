import styles from "./ActualWorks.module.scss";
import Work from "@/components/Work/Work";
import { FC } from "react";
import Link from "next/link";
import LinkButton from "@/components/UI/LinkButton/LinkButton";
import { works } from "@/links/links.data";


const ActualWorks: FC = () => {
  return (
    <section className={styles.main} id="work">
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
