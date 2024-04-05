import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { Background } from "./components/Background"
import forest from "./media/forest.mp4"
import "./App.css"

function App() {
	const [video, setVideo] = useState(forest)
	// const video = "./media/forest.mp4"

	return (
		<div className="App">
			<Background src={video} />
			<Sidebar/>
		</div>
	)
}

export default App
