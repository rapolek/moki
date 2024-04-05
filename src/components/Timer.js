import { useState } from "react"

export const Timer = () => {
	const [minutes_10, setMinutes_10] = useState(0)
	const [seconds_10, setSeconds_10] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	return (
		<>
			<h2>TIMER</h2>
			<div className="Timer">
				<div>
					<div className="set-buttons">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={5}
							stroke="#9a9a9c9a"
							className="set-button"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 15.75 7.5-7.5 7.5 7.5"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={5}
							stroke="#9a9a9c9a"
							className="set-button"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m4.5 15.75 7.5-7.5 7.5 7.5"
							/>
						</svg>
					</div>
					<h2>
						{minutes_10}
						{minutes} : {seconds_10}
						{seconds}
					</h2>
					<div className="set-buttons">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={5}
							stroke="#9a9a9c9a"
							className="set-button"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={5}
							stroke="#9a9a9c9a"
							className="set-button"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
				</div>
				{/* <div className="timer-buttons">
					<button className="start-button">START</button>
				</div> */}
			</div>
		</>
	)
}
