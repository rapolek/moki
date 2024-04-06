import { useState } from "react"
import { IncreaseButton } from "./IncreaseButton"
import { DecreaseButton } from "./DecreaseButton"

export const Timer = () => {
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	return (
		<>
			<h2>TIMER</h2>
			<div className="Timer">
				<div>
					<div className="set-buttons">
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
					<h2>
						{minutes < 10 ? `0${minutes}` : minutes} :{" "}
						{seconds < 10 ? `0${seconds}` : seconds}
					</h2>
					<div className="set-buttons">
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
				<div className="timer-buttons">
					<button className="start-button">START</button>
				</div>
			</div>
		</>
	)
}
