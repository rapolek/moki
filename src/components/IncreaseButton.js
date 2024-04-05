export const IncreaseButton = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={5}
			stroke="#9a9a9c9a"
			className="set-button"
			onClick={props.onClick}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 15.75 7.5-7.5 7.5 7.5"
			/>
		</svg>
	)
}
