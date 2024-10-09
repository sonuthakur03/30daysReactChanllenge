import { useEffect } from "react";
import { useState } from "react"

export default function App() {
	const [principal, setPrincipal] = useState('');
	const [rate, setRate] = useState('');
	const [time, setTime] = useState('');
	const [simpleInterest, setSimpleInterest] = useState('');
	const [totalAmount, setTotalAmount] = useState('');

	useEffect(() => {
		const SI = (principal * rate * time)/100

		setSimpleInterest(SI);

		const TA = Number(principal) + Number(SI)

		setTotalAmount(TA);
	}, [principal, rate, time])

	return (
		<div className="flex flex-col flex-wrap justify-center items-center bg-blue-600 min-h-screen w-full">
			<div className="w-1/2 flex flex-col flex-wrap justify-center items-center">
      <h1 className="text-2xl font-bold text-white">Simple Interest Calculator!</h1>
			<div id="inputs" className="w-3/4 flex flex-col justify-center items-center gap-3 mt-8 border py-12 rounded-md">
				<input className="border border-gray-500 p-2 w-3/4 rounded-md" type="number" placeholder="Enter Principal" id="principal" value={principal} onChange={e => setPrincipal(e.target.value)} />
				<input className="border border-gray-500 p-2 w-3/4 rounded-md" type="number" placeholder="Enter Rate" id="rate" value={rate} onChange={e => setRate(e.target.value)} />
				<input className="border border-gray-500 p-2 w-3/4 rounded-md" type="number" placeholder="Enter Time" id="time" value={time} onChange={e => setTime(e.target.value)} />
			</div>

			<div id="output" className="border w-3/4 h-48 border-white rounded-md mt-4 p-2 flex gap-3 flex-col">
				<div className="flex justify-between m-0 text-white font-bold text-xl p-2">
					<p>Simple Interest</p>
					<p>Total Amount</p>
				</div>
				<div className="w-full flex gap-3 text-2xl text-white">
				<div id="simpleInterest" className="h-28 bg-gray-600 w-3/5 flex justify-center items-center  rounded-md ">{simpleInterest}</div>
				<div id="totalAmount" className="h-28 bg-gray-600 w-3/5 flex justify-center items-center  rounded-md ">{totalAmount}</div>
				</div>
			</div>
      </div>
		</div>
	);
}

