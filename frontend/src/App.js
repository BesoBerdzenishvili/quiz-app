import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Start from "./components/Start";
import Results from "./components/Results";
import QuizBoard from "./components/QuizBoard";
function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [questionsLength, setQuestionsLength] = useState(null);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="quiz"
          element={
            <QuizBoard
              setCorrectAnswers={setCorrectAnswers}
              correctAnswers={correctAnswers}
              questionsLength={questionsLength}
              setQuestionsLength={setQuestionsLength}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              questionsLength={questionsLength}
              results={correctAnswers}
              setResults={setCorrectAnswers}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
