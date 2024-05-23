import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { decode } from "html-entities";
import { useScore } from "@/store/useScore";

export default function Options({
  options,
  answer,
}: {
  options: any;
  answer: string;
}) {
  const [activeBtn, setActiveBtn] = useState<string>();
  const { showResult, incrementScore } = useScore();

  useEffect(() => {
    if (showResult && activeBtn === answer) {
      incrementScore();
    }
  }, [showResult]);

  return (
    <>
      {options.map((option: any, idx: number) => {
        return (
          <Button
            variant="outline"
            key={idx}
            onClick={() => setActiveBtn(option)}
            className={`${
              option === activeBtn
                ? "bg-blue-500 hover:bg-blue-600 hover:text-white text-white transition-all"
                : ""
            } ${
              showResult && activeBtn === option && answer === activeBtn
                ? "bg-green-600"
                : ""
            } ${
              showResult && activeBtn === option && answer !== activeBtn
                ? "bg-red-500"
                : ""
            }`}
            disabled={showResult}
          >
            {decode(option)}
          </Button>
        );
      })}
    </>
  );
}
