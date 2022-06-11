import { nanoid } from "nanoid";
import React from "react";
import Quiz from "./Quiz";
import blob1 from "../images/question-blob1.svg";
import blob2 from "../images/question-blob2.svg";

export default function Questions() {
  const [questions, setQuestions] = React.useState([]);

  async function getQuestions() {
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  }

  function randomOptions(e) {
    // This array contains for example: ["microsoft", "apple", "meta", "macdonalds"]
    let oldOptions = e.incorrect_answers.concat(e.correct_answer.split());
    let newOptions = oldOptions.sort(() => Math.random() - 0.5);
    return newOptions;
  }

  React.useEffect(() => {
    getQuestions();
  }, []);

  return (
    <main className="py-3 px-5">
      <img src={blob1} alt="blob" className="question__blob1" />
      <img src={blob2} alt="blob" className="question__blob2" />
      {questions &&
        questions.map((e) => {
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
