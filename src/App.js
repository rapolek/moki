import './App.css';
import {useState} from 'react';
import waves from './media/waves.mp4';
import mountains from './media/mountains.mp4';
import creek from './media/creek.mp4';

function App() {

  const [video, setVideo] = useState(waves);

  const videoWaves = () => {
    setVideo(waves);
  }

  const videoCreek = () => {
    setVideo(creek);
  }

  const videoMountains = () => {
    setVideo(mountains);
  }

  return (
    <div className='App'>

      <div className='Video'>
        <video id='video-id' src={video} autoPlay loop muted playsInline preload='auto'></video>
      </div>

      <div className='LocationButtons'>
        <button className='Button' onClick={videoWaves}>🌊</button>
        <button className='Button' onClick={videoCreek}>🌿</button>
        <button className='Button' onClick={videoMountains}>🗻</button>
      </div>

    </div>
  );
}

export default App;
