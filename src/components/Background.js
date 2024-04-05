export const Background = (props) => {
	return (
		<div>
			<video
				className="Video"
				id="video-id"
				src={props.src}
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
			/>
		</div>
	)
}
