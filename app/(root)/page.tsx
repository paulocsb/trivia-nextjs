"use client";

import React, { useEffect, useState } from "react";
import Score from "@/components/score";
import Question from "@/components/question";
import Loading from "@/components/loading";
import { useQuestions } from "@/context/questionContext";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

export default function Home() {
  const { questions, fetchQuestions } = useQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentScoreWrong, setCurrentScoreWrong] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [resetSelectedAnswer, setResetSelectedAnswer] = useState(false);
  const [isShowingQuestion, setIsShowingQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDelayLoading, setIsDelayLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayLoading(false);
    }, 2000);

    if (questions.length > 0) {
      setIsLoading(false);
      setIsShowingQuestion(true);
    } else if (questions.length === 0) {
      fetchQuestions();
    }

    return () => clearTimeout(timer);
  }, [questions, fetchQuestions]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      setShowNextButton(false);
      setResetSelectedAnswer(true);
    } else {
      setIsShowingQuestion(false);
      setOpen(true);
    }
  };

  if (isLoading || isDelayLoading) {
    return <Loading />;
  }

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScoreWrong(currentScoreWrong + 1);
    }

    setResetSelectedAnswer(false);
    setShowNextButton(true);
  };

  const restartGame = () => {
    fetchQuestions();
    resetScores();
    setCurrentQuestionIndex(0);
    setIsShowingQuestion(true);
    setShowNextButton(false);
    setOpen(false);
    setIsDelayLoading(true);
  };

  const resetScores = () => {
    setCurrentScore(0);
    setCurrentScoreWrong(0);
  };

  return (
    <div className={cn("min-h-screen")}>
      <div className={cn("w-full mx-auto max-w-2xl mt-4 py-4 text-center")}>
        <Score
          currentQuestionIndex={currentQuestionIndex}
          numTotalQuestions={questions.length}
        />
      </div>
      <div className="flex items-center justify-center">
        {isShowingQuestion && (
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNextQuestion={handleNextQuestion}
            showNextButton={showNextButton}
            resetSelectedAnswer={resetSelectedAnswer}
          />
        )}
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader className={cn("mx-auto")}>
              <DrawerTitle
                className={cn(
                  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center"
                )}
              >
                🎉 Woo-hoo!!!
              </DrawerTitle>
              <DrawerDescription
                className={cn(
                  "scroll-m-20 text-2xl tracking-tight lg:text-2xl text-center"
                )}
              >
                You completed the Trivia!
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className={cn("scroll-m-20 tracking-tight text-center")}>
                <p className={cn("text-4xl lg:text-5xl")}>🏆</p>
                <p className={cn("text-center p-4 text-lg font-semibold")}>
                  You scored {currentScore} out of {questions.length}
                </p>
              </div>
              <DrawerClose asChild>
                <div className={cn("mx-auto text-center")}>
                  <Button onClick={restartGame}>Play again</Button>
                </div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
