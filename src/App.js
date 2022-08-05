import React from "react";
import axios from "axios";
// import Confetti from "react-confetti";
import Start from "./components/Start";
import Questions from "./components/Questions";
import CheckButton from "./components/CheckButton";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setApi } from "./slices/apiSlice";

export default function App() {
  const dispatch = useDispatch();

  const [isStarted, setIsStarted] = React.useState(false);

  const numberOfQuestions = 20;

  function startQuiz() {
    setTimeout(() => {
      setIsStarted(true);
    }, 2500);
  }

  function getQuestions() {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=18&type=multiple`;
    axios.get(url).then((response) => {
      dispatch(setApi(response.data.results));
    });
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
