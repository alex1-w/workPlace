import styles from "./StepThreeQuestion.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { IQuestion } from "../IQuestion";
import { Field } from "@/components/UI/Field/Field";
import CardWrapper from "@/components/CardWrapper/CardWrapper";

export const StepThreeQuestion: FC<{
}> = () => {

  const [question, setQuestion] = useState<IQuestion>({
    question: "",
    answer: "",
    id: 2,
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setQuestion({ ...question, [e.target.name]: e.target.value });

  return (
    <CardWrapper>
      <div className={styles.main}>
        <div className={styles.main__item}>
          <p>Вопрос</p>
          <Field
            name="question"
            placeholder=""
            type="text"
            value={question.question}
            onChange={changeHandler}
            variant="formVariant"
          />
        </div>

        <div className={styles.main__item}>
          <p>Ответ</p>
          <Field
            name="answer"
            placeholder=""
            type="text"
            value={question.answer}
            onChange={changeHandler}
            variant="formVariant"
          />
        </div>
        <button type="button" className={styles.deleteBtn}>
          Удалить
        </button>
      </div>
    </CardWrapper>
  );
};
