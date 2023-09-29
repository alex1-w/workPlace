import styles from "./StepFive.module.scss";
import { AddBtn } from "@/components/UI/AddBtn/AddBtn";
import FieldBlock from "@/components/UI/FieldBlock/FieldBlock";

export const StepFive = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__item}>
        <h1>Создайте свою галерею</h1>
        <p>
          Добавьте запоминающийся контент в свою галерею, чтобы выделиться среди
          конкурентов.
        </p>
      </div>

      <div className={styles.main__item}>
        <h2>Фотографии ворка</h2>
        <p>
          Загрузите фотографии, которые описывают или имеют отношение к вашему
          ворку. Только файлы с расширением png, jpg, jpeg.
        </p>
      </div>

      <div>
        <AddBtn title="Добавить фото" />
      </div>
      <FieldBlock
        name="videoLink"
        placeholder="https:f//"
        title="Ссылка на видео"
        type="text"
      />

      <div className={styles.main__item}>
        <h3>Документы ворка</h3>
        <p>
          Мы рекомендуем добавлять файл документа только в том случае, если он
          дополнительно разъясняет услугу, которую вы будете предоставлять.
        </p>
      </div>
    </main>
  );
};
