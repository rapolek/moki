import { useState } from "react"
import forest from "../media/forest.mp4"
import LOCATIONS from "../locations"

export const Sidebar = (props) => {
	return (
		<div className="Sidebar">
			<h2 className="LocationsHeading">LOCATIONS</h2>
			<div className="LocationButtons">
				{LOCATIONS.map((location, index) => (
					<button className="Button" key={index} onClick={props.handleClick}>
						{location.emoji}
					</button>
				))}
			</div>
		</div>
	)
}
