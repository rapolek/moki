import './App.css';
import {useState} from 'react';
import waves from './media/waves.mp4';
import mountains from './media/mountains.mp4';
import creek from './media/creek.mp4';

const LOCATIONS = [
  {
    emoji: "🌊",
    video: waves,
  },
  {
    emoji: "🌿",
    video: creek,
  },
  {
    emoji: "🗻",
    video: mountains,
  },
]

function App() {
  const [video, setVideo] = useState(waves);

  return (
    <div className='App'>

      <div>
        <video className='Video' id='video-id' src={video} autoPlay loop muted playsInline preload='auto'></video>
      </div>

      <div className='LocationButtons'>
        {LOCATIONS.map((location, index) => <button className='Button' key={index} onClick={() => setVideo(location.video)}>{location.emoji}</button>)}
      </div>

    </div>
  );
}

export default App;
