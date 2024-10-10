import { useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register necessary components for Chart.js
Chart.register(...registerables);

export default function PollComponent({ desc: { question, optionOne, optionTwo, optionThree, optionFour } }) {
  const [optA, setOptA] = useState(0);
  const [optB, setOptB] = useState(0);
  const [optC, setOptC] = useState(0);
  const [optD, setOptD] = useState(0);

  const data = {
    labels: [optionOne, optionTwo, optionThree, optionFour],
    datasets: [
      {
        label: 'Votes',
        data: [optA, optB, optC, optD],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border border-gray-200 rounded-lg shadow-lg bg-gray-800 text-white">
      <h4 className="text-xl font-semibold mb-4" id="question">
        {question}
      </h4>
      <div id="buttons">
        <button
          className="option bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-2 w-full"
          onClick={() => setOptA((prev) => prev + 1)}
        >
          <span>{optionOne}</span>
          <span className="ml-2 font-light">({optA})</span>
        </button>
        <button
          className="option bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-2 w-full"
          onClick={() => setOptB((prev) => prev + 1)}
        >
          <span>{optionTwo}</span>
          <span className="ml-2 font-light">({optB})</span>
        </button>
        <button
          className="option bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-2 w-full"
          onClick={() => setOptC((prev) => prev + 1)}
        >
          <span>{optionThree}</span>
          <span className="ml-2 font-light">({optC})</span>
        </button>
        <button
          className="option bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mb-2 w-full"
          onClick={() => setOptD((prev) => prev + 1)}
        >
          <span>{optionFour}</span>
          <span className="ml-2 font-light">({optD})</span>
        </button>
      </div>

      {/* Bar Chart */}
      <div className="mt-4">
        <Bar
          data={data}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1, // Change the step size to 1
                  },
                title: {
                  display: true,
                  text: 'Number of Votes',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
