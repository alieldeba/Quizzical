import React from "react";
import Quiz from "./Quiz";

export default function Questions() {
  const [questions, setQuestions] = React.useState([]);

  async function getQuestions() {
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  }

  React.useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {questions &&
        questions.map((e, index) => {
          return <Quiz key={index} question={e.question} answers={e.incorrect_answers} />;
        })}
    </div>
  );
}
