import styles from "./StepThree.module.scss";
import CardWrapper from "@/components/CardWrapper/CardWrapper";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { IQuestion } from "./IQuestion";
import { StepThreeQuestion } from "./StepThreeQuestion/StepThreeQuestion";
import { plusIcon } from "@/icons/icons";

export const apiKey = "zx7ykfpmfhkoi8hkbazov0fc5z50kw4vt4cobqsqbjqv564b";

export const StepThree = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const addQuestion = () => {
    setQuestions([...questions, { answer: "", question: "", id: Date.now() }]);
  };

  console.log(questions);

  return (
    <main className={styles.main}>
      <h1>Описание</h1>

      <div className={styles.textDescriptionBlock}>
        <Editor apiKey={apiKey} />
      </div>

      <div className={styles.questionsBlock}>
        <h2>Часто задаваемые вопросы</h2>
        <div className={styles.questionsBlock__questionsGrid}>
          {questions?.map((item) => (
            <StepThreeQuestion key={item.answer} />
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className={styles.addQuestion}
          >
            {plusIcon}
            Добавить вопрос-ответ
          </button>
        </div>
      </div>
    </main>
  );
};
