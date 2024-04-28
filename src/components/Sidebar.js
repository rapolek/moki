import { useState } from "react"
import LOCATIONS from "../locations"
import { Timer } from "./Timer"
import { Background } from "./Background"
import forest from "../media/forest.mp4"

export const Sidebar = (props) => {
	const [video, setVideo] = useState(forest)

	return (
		<div className="flex flex-col h-screen w-60 bg-neutral-800">
			<Background src={video} />
			<h2 className="my-6 font-sans font-black text-center text-2xl text-neutral-500">
				LOCATIONS
			</h2>
			<div className="flex flex-col flex-wrap justify-center content-center items-center h-[40rem] gap-4">
				{LOCATIONS.map((location, index) => (
					<button
						className="border rounded-xl border-neutral-700 border-2 p-4 text-2xl"
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
