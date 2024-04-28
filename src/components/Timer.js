import { useState } from "react"
import { IncreaseButton } from "./IncreaseButton"
import { DecreaseButton } from "./DecreaseButton"

export const Timer = () => {
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [start, setStart] = useState(false)

	const startTimer = () => {
		const timerTimeout = setTimeout(() => setSeconds(seconds - 1), 1000)

		if (minutes !== 0 && seconds === 0) {
			setMinutes(minutes - 1)
			setSeconds(59)
		}
		if (minutes === 0 && seconds === 0) {
			alert("TIME'S UP!")
			setStart(!start)
			clearTimeout(timerTimeout)
			return 0
		}
	}

	if (start) {
		startTimer()
	}

	return (
		<>
			<div className="h-80">
				<h2 className="my-6 font-sans font-black text-center text-2xl text-neutral-500">
					TIMER
				</h2>
				<div>
					<div className="flex justify-between mx-[4.4rem]">
						<IncreaseButton
							onClick={() =>
								minutes === 59 ? setMinutes(0) : setMinutes(minutes + 1)
							}
						/>
						<IncreaseButton
							onClick={() =>
								seconds === 59 ? setSeconds(0) : setSeconds(seconds + 1)
							}
						/>
					</div>
					<h2 className=" my-4 font-sans font-black text-center text-2xl text-neutral-500">
						{minutes < 10 ? `0${minutes}` : minutes} :{" "}
						{seconds < 10 ? `0${seconds}` : seconds}
					</h2>
					<div className="flex justify-between mx-[4.4rem]">
						<DecreaseButton
							onClick={() =>
								minutes === 0 ? setMinutes(59) : setMinutes(minutes - 1)
							}
						/>
						<DecreaseButton
							onClick={() =>
								seconds === 0 ? setSeconds(59) : setSeconds(seconds - 1)
							}
						/>
					</div>
				</div>
				<div className="flex justify-evenly m-8">
					<button
						className="px-2 font-sans font-black text-lg text-neutral-500 gap-4 border border-2 border-neutral-600 rounded-lg"
						onClick={() => setStart(!start)}
					>
						{start ? "STOP" : "START"}
					</button>
				</div>
			</div>
		</>
	)
}
