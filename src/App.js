import React from "react";
// import Confetti from "react-confetti";
import Start from "./components/Start";
import Questions from "./components/Questions";
import CheckButton from "./components/CheckButton";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { decode } from "html-entities";
import { setApi } from "./slices/apiSlice";

export default function App() {
  const dispatch = useDispatch();

  const [isStarted, setIsStarted] = React.useState(false);

  const numberOfQuestions = 20;

  function startQuiz() {
    setIsStarted(true);
  }

  async function getQuestions() {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=18&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setApi(decode(data.results)));
  }

  React.useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="app">
      {isStarted ? (
        <>
          <Questions />
          <CheckButton numberOfQuestions={numberOfQuestions} />
        </>
      ) : (
        <Start startQuiz={startQuiz} />
      )}
    </div>
  );
}
