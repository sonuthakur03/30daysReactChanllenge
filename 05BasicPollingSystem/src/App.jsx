import PollComponent from "./components/PollComponent";

export default function App() {

  const questions = [{
    question: "Who was the first person to score 250 in ODIs?",
    optionOne: "Martin Guptil",
    optionTwo: "Sachin Tendulkar",
    optionThree: "Chris Gayle",
    optionFour: "Rohit Sharma",
  },
  {
    question: "Which team scored 300 in T20Is for the first time?",
    optionOne: "India",
    optionTwo: "Nepal",
    optionThree: "Australia",
    optionFour: "England",
  }
]
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-6 text-white">Basic Polling System!</h1>
        <div className="flex flex-wrap gap-3">
        {questions.map((ques,index) => <PollComponent desc={ques} key={index} />)}
        </div>
      </div>
    </div>
  );
}
