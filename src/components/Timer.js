import { useState } from "react"

export const Timer = () => {
	const [minutes, setMinutes] = useState(15)
	const [seconds, setSeconds] = useState(0)

	return (
		<>
			<h2>TIMER</h2>
			<div className="Timer">
				<h2>
					{minutes}
					{seconds}
				</h2>

				<div className="timer-buttons">
					<button className="start-button">START</button>
				</div>
			</div>
		</>
	)
}
