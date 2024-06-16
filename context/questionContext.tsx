"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { QuestionType } from '@/types';
import { TRIVIA_API_URL } from '@/constants'

interface QuestionsContextType {
  questions: QuestionType[];
  fetchQuestions: () => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestions must be used within a QuestionsProvider');
  }
  return context;
};

export const QuestionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const fetchQuestions = async () => {
    const response = await fetch(TRIVIA_API_URL);
    const data = await response.json();

    // Fisher-Yates (Durstenfeld) shuffle algorithm
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }

    // Shuffle options for each question
    data.forEach((question: any) => {
      if (question.options) {
        for (let i = question.options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [question.options[i], question.options[j]] = [question.options[j], question.options[i]];
        }
      }
    });

    setQuestions(data.slice(0, 10));
  }

  return (
    <QuestionsContext.Provider value={{ questions, fetchQuestions }}>
      {children}
    </QuestionsContext.Provider>
  )
}
