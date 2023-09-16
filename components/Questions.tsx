import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { decode } from "html-entities";

export default function Questions() {
  const questions = [
    {
      title: "First question",
      options: ["A", "B", "C"],
      answer: "D",
    },
    {
      title: "Second question",
      options: ["A", "C", "D"],
      answer: "B",
    },
  ];

  function shuffleOptions(options: string[]): string[] {
    return options.sort(() => 0.5 - Math.random());
  }

  const { data } = useQuery({
    queryKey: ["questions"],
    queryFn: async () =>
      await axios
        .get("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
        .then((res) => res.data.results),
    staleTime: Infinity,
  });

  return (
    <>
      {data && (
        <div className="container flex flex-col gap-5 pt-6 md:pt-12">
          {data.map((question: any, idx: number) => {
            return (
              <>
                <div className="flex flex-col gap-2" key={idx}>
                  <h3 className="textlg md:text-2xl">
                    {decode(question.question)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {shuffleOptions([
                      ...question.incorrect_answers,
                      question.correct_answer,
                    ]).map((option, idx) => {
                      return (
                        <Button variant="outline" key={idx}>
                          {decode(option)}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <Separator className={`${idx + 1 === 10 ? "hidden" : ""}`} />
              </>
            );
          })}
          <Button className="w-fit m-auto mb-5" variant="outline">
            Submit
          </Button>
        </div>
      )}
    </>
  );
}
