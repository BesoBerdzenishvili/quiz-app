import { useState, useEffect } from "react";

export default function QuizBoard() {
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
  const questions = data ? data.map((i) => i) : null;
  return (
    <div>
      {questions && questions.length}
      {questions && questions[0].question}
      {questions && questions.map((i) => <button>{i.a.answer}</button>)}
    </div>
  );
}
