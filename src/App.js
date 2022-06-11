import React from "react";
import Confetti from "react-confetti";
import Start from "./components/Start";
import Questions from "./components/Questions";
import CheckButton from "./components/CheckButton";
import "./css/style.css";
import "./css/bootstrap.min.css";

export default function App() {
  const [isStarted, setIsStarted] = React.useState(false);

  function startQuiz() {
    setIsStarted(true);
  }

  // Setting isGood to true if the result of the test is more than the half

  // Making a useEffect that check if isGood is true making confetti

  return (
    <div className="app">
      {isStarted ? (
        <>
          <Questions />
          <CheckButton />
        </>
      ) : (
        <Start startQuiz={startQuiz} />
      )}
    </div>
  );
}
