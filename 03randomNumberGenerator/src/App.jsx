import { useState } from "react";
import "./App.css";

function App() {
  const [startRange, setStartRange] = useState("");
  const [endRange, setEndRange] = useState("");
  const [output, setOutput] = useState("");

  const getRandomInteger = (min, max) => {
       return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleInput = () => {
    if (isNaN(startRange) || isNaN(endRange) || startRange == '' || endRange == '') {
      setOutput('Invalid Input')
      setEndRange('');
      setStartRange('');
    } else {
      const randomInteger = getRandomInteger(Number(startRange), Number(endRange));
      setOutput(randomInteger);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 border border-gray-400 p-10 rounded-lg">
      <h1 className="text-3xl">Random Number Generator</h1>
      <div
        id="inputs"
        className="flex flex-col justify-center items-center gap-3 m-6 w-full">
        <input
          type="text"
          placeholder="Starting range"
          name="startRange"
          id="startRange"
          className="w-full p-2 rounded-md"
          value={startRange}
          onChange={e => setStartRange(e.target.value)}
        />
        <input
          type="text"
          name="endRange"
          id="endRange"
          placeholder="Ending range"
          className="w-full p-2 rounded-md"
          value={endRange}
          onChange={e => setEndRange(e.target.value)}
        />
      </div>
      <button id="generate" className="w-full p-2 bg-blue-800" onClick={handleInput}>
        Generate
      </button>
      <div
        id="randomNumber"
        className="w-full h-20 text-5xl bg-gray-800 p-3 rounded-md">
        {output}
      </div>
    </div>
  );
}

export default App;
