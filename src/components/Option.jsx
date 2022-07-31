import React from "react";
import { decode } from "html-entities";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPoint } from "../slices/calculateSlice";
import { nanoid } from "nanoid";

export default function Option(props) {
  const dispatch = useDispatch();
  const calculate = useSelector((state) => state.calculate.calculate);

  const [answerValue, setAnswerValue] = React.useState("");
  const [allOptions, setAllOptions] = React.useState([]);
  const [render, setRender] = React.useState(false);

  function activeButton(value) {
    setAnswerValue(value);
  }

  let options = props.incorrectOptions.concat([props.correctOption]);

  function shuffledArray() {
    options = options.sort((a, b) => 0.5 - Math.random());
    return options;
  }

  React.useEffect(() => {
    setAllOptions(shuffledArray(options));
  }, []);

  if (calculate && answerValue === props.correctOption && render === false) {
    setRender(true);
    dispatch(addPoint());
  }

  return (
    <>
      {allOptions.map((option) => {
        if (calculate && !answerValue) {
          return (
            <button
              className={`btn btn-primary rounded mb-3 me-2 ${
                calculate && "disabled"
              } ${answerValue === option ? "active" : "inactive"}`}
              onClick={() => activeButton(option)}
              key={nanoid()}
            >
              {decode(option)}
            </button>
          );
        } else if (
          calculate &&
          answerValue === option &&
          answerValue === props.correctOption
        ) {
          return (
            <button
              className={`btn green rounded mb-3 me-2 ${
                calculate && "disabled"
              } ${answerValue === option ? "active" : "inactive"}`}
              onClick={() => activeButton(option)}
              key={nanoid()}
            >
              {decode(option)}
            </button>
          );
        } else if (
          calculate &&
          answerValue &&
          answerValue === option &&
          answerValue !== props.correctOption
        ) {
          return (
            <button
              className={`btn red rounded mb-3 me-2 ${
                calculate && "disabled"
              } ${answerValue === option ? "active" : "inactive"}`}
              onClick={() => activeButton(option)}
              key={nanoid()}
            >
              {decode(option)}
            </button>
          );
        } else {
          return (
            <button
              className={`btn btn-primary rounded mb-3 me-2 ${
                calculate && "disabled"
              } ${answerValue === option ? "active" : "inactive"}`}
              onClick={() => activeButton(option)}
              key={nanoid()}
            >
              {decode(option)}
            </button>
          );
        }
      })}
    </>
  );
}
