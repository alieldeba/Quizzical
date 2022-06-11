import React from "react";
import Option from "./Option";
import "../css/style.css";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  return (
    <div className="quiz">
      <div className="container">
        <h3 className="quiz__question mb-3">{props.question}</h3>
        <div className="quiz__answers">
          {props.options.map((option) => (
            <Option option={option} key={nanoid()} />
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
