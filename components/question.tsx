// components/Question.tsx
import React, { useState, useEffect } from "react";
import { QuestionType } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuestionProps {
  question: QuestionType;
  showNextButton: boolean;
  resetSelectedAnswer: boolean;
  onAnswer: (answer: string) => void;
  onNextQuestion: () => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  onNextQuestion,
  showNextButton,
  resetSelectedAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (resetSelectedAnswer) {
      setSelectedAnswer(null);
    }
  }, [resetSelectedAnswer]);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  const getButtonClass = (answer: string) => {
    if (!selectedAnswer) return "";
    if (answer === question.correctAnswer) return "bg-green-500 text-white";
    if (answer === selectedAnswer) return "bg-red-500 text-white";
    return "";
  };

  return (
    <Card className={cn("w-full max-w-2xl mt-4 p-4 shadow-md")}>
      <CardHeader>
        <CardTitle className={cn("text-center")}>{question.question}</CardTitle>
      </CardHeader>
      <CardContent className={cn("p-10")}>
        <dl
          className={cn(
            "grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8"
          )}
        >
          {question.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={`${getButtonClass(
                option
              )} p-2 rounded-lg transition-all duration-300`}
              disabled={!!selectedAnswer}
              variant={"outline"}
            >
              {option}
            </Button>
          ))}
        </dl>
      </CardContent>
      <CardFooter className={cn("flex justify-center")}>
        {showNextButton && (
          <Button
            onClick={onNextQuestion}
            variant={"secondary"}
            className="transition-all duration-300"
          >
            Continue
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Question;
