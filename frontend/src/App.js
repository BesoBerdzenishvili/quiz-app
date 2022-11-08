import { useState } from "react";
import Header from "./components/Header";
import QuizBoard from "./components/QuizBoard";
function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  return (
    <div>
      <Header />
      <QuizBoard
        setCorrectAnswers={setCorrectAnswers}
        correctAnswers={correctAnswers}
      />
    </div>
  );
}

export default App;
