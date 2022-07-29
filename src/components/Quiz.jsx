import React from "react";
import Option from "./Option";
import "../css/style.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { decode } from "html-entities";

export default function Quiz() {
  const api = useSelector((state) => state.api);

  return (
    <div className="quiz">
      <div className="container">
        {api.map((e) => {
          return (
            <div key={nanoid()}>
              <h3 className="quiz__question mb-3">{decode(e.question)}</h3>
              <div className="quiz__answers">
                <Option
                  incorrectOptions={e.incorrect_answers}
                  correctOption={e.correct_answer}
                  key={nanoid()}
                />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
