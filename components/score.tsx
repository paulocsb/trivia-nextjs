import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

interface ScoreProps {
  currentQuestionIndex: number;
  numTotalQuestions: number;
}

const Score: React.FC<ScoreProps> = ({
  currentQuestionIndex,
  numTotalQuestions,
}) => {
  const [questionIndex, setQuestionIndex] = useState(currentQuestionIndex);

  useEffect(() => {
    setQuestionIndex(
      currentQuestionIndex < numTotalQuestions
        ? currentQuestionIndex + 1
        : currentQuestionIndex
    );
  }, [currentQuestionIndex, numTotalQuestions]);

  return (
    <section>
      <Header />
      <div>
        <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight")}>
          Questions: {questionIndex} out of {numTotalQuestions}
        </h3>
        <Progress value={(currentQuestionIndex * 100) / numTotalQuestions} />
      </div>
    </section>
  );
};

export default Score;
