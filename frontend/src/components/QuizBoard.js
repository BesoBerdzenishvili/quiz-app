import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "../stitches.config";

const Container = styled("div", {
  backgroundColor: "$green",
  maxWidth: 244,
  width: "100%",
  padding: "8px 8px",
  borderRadius: 8,
  fontSize: 13,
  fontWeight: "bolder",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "& p:first-child": {
    textAlign: "right",
  },
  "& p:nth-child(2)": {
    marginBottom: 12,
  },
  "& button": {
    backgroundColor: "white",
    outline: "none",
    border: "none",
    maxWidth: 222,
    width: "100%",
    padding: "2.5px 11px",
    borderRadius: 8,
    marginBottom: 8,
    textAlign: "left",
    cursor: "pointer",
  },
});

export default function QuizBoard({ setCorrectAnswers, correctAnswers }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(`/api/questions`).then((response) =>
        response.json()
      );
      setData(actualData);
      console.log(actualData);
    }
    getData();
  }, []);
  let navigate = useNavigate();
  const handleClick = (isCorrect) => {
    setQuestionNum(questionNum + 1);
    if (questionNum === data.length - 1) {
      setQuestionNum(0);
      navigate("/logout");
    }
    isCorrect && setCorrectAnswers(correctAnswers + 1);
  };
  return (
    <Container>
      <p>
        {questionNum + 1}/{data && data.length}
      </p>
      <p>{data && data[questionNum].questionTxt}?</p>
      {data &&
        data[questionNum].answerOptions.map((i) => (
          <button key={i.answerTxt} onClick={() => handleClick(i.isCorrect)}>
            {i.answerTxt}
          </button>
        ))}
    </Container>
  );
}
