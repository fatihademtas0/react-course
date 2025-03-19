import { useState } from "react";
import "./App.css";

function App() {
  const [exam1, setExam1] = useState(0);

  const [exam2, setExam2] = useState(0);

  const sum = () => {
    debugger;
    const total = exam1 + exam2;
    return total;
  };

  const average = () => {
    debugger;

    const average = sum() / 2;
    print(average);
  };

  const print = (average) => {
    debugger;
    console.log("Average = " + average);
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={exam1}
          onChange={(e) => setExam1(Number(e.target.value))}
        />
      </div>

      <div>
        <input
          type="number"
          value={exam2}
          onChange={(e) => setExam2(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={average}>Find Average</button>
      </div>
    </>
  );
}

export default App;
