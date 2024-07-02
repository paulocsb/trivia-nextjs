"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { QuestionType } from "@/types";
import { fetchJsonServerData } from "@/lib/api";

interface QuestionsContextType {
  questions: QuestionType[];
  fetchQuestions: () => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined
);

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  return context;
};

export const QuestionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const fetchQuestions = async () => {
    const response = await fetchJsonServerData("/questions");
    const data = await response.json();

    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }

    data.forEach((question: any) => {
      if (question.options) {
        for (let i = question.options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [question.options[i], question.options[j]] = [
            question.options[j],
            question.options[i],
          ];
        }
      }
    });

    setQuestions(data.slice(0, 10));
  };

  return (
    <QuestionsContext.Provider value={{ questions, fetchQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
