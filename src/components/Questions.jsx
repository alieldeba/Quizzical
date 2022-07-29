import React from "react";
import Quiz from "./Quiz";
import blob1 from "../images/question-blob1.svg";
import blob2 from "../images/question-blob2.svg";

export default function Questions(props) {
  return (
    <main className="py-3 px-5">
      <img src={blob1} alt="blob" className="question__blob1" />
      <img src={blob2} alt="blob" className="question__blob2" />
      <Quiz />
    </main>
  );
}
