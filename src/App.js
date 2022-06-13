import React from "react";
import Confetti from "react-confetti";
import Start from "./components/Start";
import Questions from "./components/Questions";
import CheckButton from "./components/CheckButton";
import "./css/style.css";
import "./css/bootstrap.min.css";

export default function App() {
  const [questions, setQuestions] = React.useState([]);
  const [isStarted, setIsStarted] = React.useState(false);
  const [correct, setCorrect] = React.useState(0);
  const [questionsAnswered, setQuestionsAnswered] = React.useState(0);
  const [isGood, setIsGood] = React.useState(false);
  const [questionsNumber, setQuestionsNumber] = React.useState();

  function startQuiz() {
    setIsStarted(true);
  }

  async function getQuestions() {
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setQuestionsNumber(data.results.length);
  }

  React.useEffect(() => {
    getQuestions();
  }, []);

  // Setting isGood to true if the result of the test is more than the half
  function check() {
    // check that all questions are answered
    setIsGood(true)
  }

  return (
    <div className="app">
      {isStarted ? (
        <>
          <Questions questions={questions} />
          <CheckButton correct={correct} questionsNumber={questionsNumber} check={check} isGood={isGood} />
        </>
      ) : (
        <Start startQuiz={startQuiz} />
      )}
    </div>
  );
}
