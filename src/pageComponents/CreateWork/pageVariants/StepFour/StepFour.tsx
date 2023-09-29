import styles from "./StepFour.module.scss";
import { Editor } from "@tinymce/tinymce-react";
import { apiKey } from "../StepThree/StepThree";

export const StepFour = () => {
  let q = "grw";

  return (
    <div className={styles.main}>
      <h1>
        Расскажите покупателю, что вам нужно для начала работы над заказом.
      </h1>
      <h2>
        Структурируйте свои инструкции для покупателя в виде произвольного
        текста.
      </h2>

      <div>
        <Editor apiKey={apiKey} />
      </div>
    </div>
  );
};
