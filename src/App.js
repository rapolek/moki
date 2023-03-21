import './App.css';
import {useState} from 'react';
import forest from './media/forest.mp4';
import LOCATIONS from './locations.js';

function App() {
  const [video, setVideo] = useState(forest);

  return (
    <div className='App'>

      <div className='Sidebar'>

        <h2 className='LocationsHeading'>LOCATIONS</h2>

        <div className='LocationButtons'>
          {LOCATIONS.map((location, index) => <button className='Button' key={index} onClick={() => setVideo(location.video)}>{location.emoji}</button>)}
        </div>

        <h2>TIMER</h2>

      </div>

      <div>
        <video className='Video' id='video-id' src={video} autoPlay loop muted playsInline preload='auto'></video>
      </div>


    </div>
  );
}

export default App;
