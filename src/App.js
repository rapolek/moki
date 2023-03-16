import './App.css';
import waves from './media/waves.mp4';

function App() {
  return (
    <div className='App'>

      <div className='Video'>
        <video id='video-id' src={waves} controls autoplay loop muted playsinline preload='auto'></video>
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
