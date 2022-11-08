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
    borderRadius: 14,
    padding: "8px 19px",
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

export default function Start() {
  return (
    <Container>
      <h1>WELCOME!</h1>

      <Link to="/quiz">
        <button>Start</button>
      </Link>
    </Container>
  );
}
