import { nanoid } from "nanoid";
import React from "react";
import Quiz from "./Quiz";
import blob1 from "../images/question-blob1.svg";
import blob2 from "../images/question-blob2.svg";

export default function Questions(props) {


  function randomOptions(e) {
    // This array contains for example: ["microsoft", "apple", "meta", "macdonalds"]
    let oldOptions = e.incorrect_answers.concat(e.correct_answer.split());
    let newOptions = oldOptions.sort(() => Math.random() - 0.5);
    return newOptions;
  }

  return (
    <main className="py-3 px-5">
      <img src={blob1} alt="blob" className="question__blob1" />
      <img src={blob2} alt="blob" className="question__blob2" />
      {props.questions &&
        props.questions.map((e) => {
          var options = randomOptions(e);
          return (
            <Quiz
              question={e.question}
              options={options}
              correct={e.correct_answer}
              key={nanoid()}
            />
          );
        })}
    </main>
  );
}
