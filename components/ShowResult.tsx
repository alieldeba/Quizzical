import React from "react";
import { Button } from "./ui/button";
import { useScore } from "@/store/useScore";

export default function ShowResult({ state }: { state: any }) {
  const { score, setShowResult, showResult } = useScore();

  function submitQuiz() {
    setShowResult(true);
  }

  return (
    <>
      {showResult ? (
        <div className="flex flex-col">
          <p className="w-fit m-auto">Your Score: {score} / 10</p>
          <Button variant="link" onClick={() => state(false)}>
            try Again?
          </Button>
        </div>
      ) : (
        <Button
          className="w-fit m-auto mb-5"
          variant="outline"
          onClick={() => submitQuiz()}
        >
          Submit
        </Button>
      )}
    </>
  );
}
