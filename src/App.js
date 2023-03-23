import './App.css';
import {useState, useEffect} from 'react';
import forest from './media/forest.mp4';
import LOCATIONS from './locations.js';

function App() {
  const [video, setVideo] = useState(forest);
  const [timer, setTimer] = useState('00:00:00');

  return (
    <div className='App'>

      <div className='Sidebar'>

        <h2 className='LocationsHeading'>LOCATIONS</h2>

        <div className='LocationButtons'>
          {LOCATIONS.map((location, index) => <button className='Button' key={index} onClick={() => setVideo(location.video)}>{location.emoji}</button>)}
        </div>

        <h2>TIMER</h2>

        <div className='Timer'>
          <h2>{timer}</h2>
          
          <div className='timer-buttons'>
            <button className='start-button'>START</button>
            <button className='pause-button'>PAUSE</button>
          </div>

        </div>

      </div>

      <div>
        <video className='Video' id='video-id' src={video} autoPlay loop muted playsInline preload='auto'></video>
      </div>


    </div>
  );
}

export default App;
