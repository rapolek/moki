import './App.css';
import {useState} from 'react';
import waves from './media/waves.mp4';
import LOCATIONS from './locations.js';

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
