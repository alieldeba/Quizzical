import React from "react";
import Confetti from "react-confetti";
import Start from "./components/Start";
import "./css/style.css";

export default function App() {
  const [clicked, setClicked] = React.useState(false);

  function startQuiz() {
    setClicked(true);
  }

  return (
    <>
      {clicked === false && <Start startQuiz={startQuiz} />} <Confetti />
    </>
  );
}
