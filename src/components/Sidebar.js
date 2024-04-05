import { useState } from "react"
import LOCATIONS from "../locations"
import { Timer } from "./Timer"
import { Background } from "./Background"
import forest from "../media/forest.mp4"

export const Sidebar = (props) => {
	const [video, setVideo] = useState(forest)

	return (
		<div className="Sidebar">
			<Background src={video} />
			<h2 className="LocationsHeading">LOCATIONS</h2>
			<div className="LocationButtons">
				{LOCATIONS.map((location, index) => (
					<button
						className="Button"
						key={index}
						onClick={() => setVideo(location.video)}
					>
						{location.emoji}
					</button>
				))}
			</div>
			<Timer />
		</div>
	)
}
