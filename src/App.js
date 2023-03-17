import './App.css';
import waves from './media/waves.mp4';

function App() {
  return (
    <div className='App'>

      <div className='Video'>
        <video id='video-id' src={waves} autoPlay loop muted playsInline preload='auto'></video>
      </div>

      <div className='LocationButtons'>
        <button className='Button'>🌊</button>
        <button className='Button'>🌿</button>
        <button className='Button'>🗻</button>
      </div>

    </div>
  );
}

export default App;
