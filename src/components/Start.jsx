import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import blob1 from "../images/start-blob1.svg";
import blob2 from "../images/start-blob2.svg";

export default function Start(props) {
  return (
    <main className="start">
      <img src={blob1} alt="blob" className="start__blob1" />
      <img src={blob2} alt="blob" className="start__blob2" />
      <section className="start__text">
        <h1 className="start__heading">Quizzical</h1>
        <p className="start__description">
          Try to answer all the questions right to get the priz at the end, Good
          luck
        </p>
        <button
          className="btn btn-primary rounded-pill w-75"
          onClick={props.startQuiz}
        >
          Start quiz
        </button>
      </section>
    </main>
  );
}
