import React from "react";
import Start from "./components/Start";
import "./css/style.css";

export default function App() {
  const [clicked, setClicked] = React.useState(false);

  function startQuiz() {
    setClicked(true);
  }

  return <div>{clicked === false && <Start startQuiz={startQuiz} />}</div>;
}
