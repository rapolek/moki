export const Background = (props) => {
	return (
		<div>
			<video
				className="absolute h-screen w-screen object-cover -z-10"
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
