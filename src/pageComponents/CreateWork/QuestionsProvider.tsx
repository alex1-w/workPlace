"use client";
import { FC, createContext, useContext, useState } from "react";
import { IQuestion } from "./pageVariants/StepThree/IQuestion";

interface IQuestionsContext {
  questions: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
  question: IQuestion;
  setQuestion: (q: IQuestion) => void;
}

const QuestionsContext = createContext<IQuestionsContext>({
  questions: [],
  question: {} as IQuestion,
  setQuestion: (q: IQuestion) => {
    return null;
  },
  setQuestions: (questions: IQuestion[]) => {
    return null;
  },
});

export const QuestionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [question, setQuestion] = useState<IQuestion>({} as IQuestion);

  return (
    <QuestionsContext.Provider
      value={{ question, questions, setQuestion, setQuestions }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestionsContext = () => useContext(QuestionsContext);
