import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../stitches.config";

const Container = styled("div", {
  backgroundColor: "$paleGrey",
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
  textAlign: "center",
  "& button": {
    backgroundColor: "$green",
    outline: "none",
    border: "none",
    padding: "8px 19px",
    borderRadius: 14,
    fontWeight: "bolder",
    cursor: "pointer",
    marginTop: 12,
  },
  "& button:active": {
    position: "relative",
    top: 2,
    left: 2,
  },
});

export default function Start({ results, setResults, questionsLength }) {
  const handleClick = () => {
    setResults(0);
  };
  return (
    <Container>
      <h1>Results:</h1>
      <p>
        {results}/{questionsLength}
      </p>

      <Link to="/">
        <button onClick={handleClick}>Play again</button>
      </Link>
    </Container>
  );
}
