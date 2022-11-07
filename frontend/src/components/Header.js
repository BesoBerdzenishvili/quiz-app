import React from "react";
import { styled } from "../stitches.config";

const Container = styled("div", {
  backgroundColor: "$grey",
  maxHeight: "24px",
  height: "100%",
  color: "white",
  textAlign: "center",
  fontWeight: "bolder",
});

export default function Header() {
  return <Container>QUIZ</Container>;
}
