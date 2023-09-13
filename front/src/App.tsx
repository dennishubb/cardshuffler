import './Styles/App.css';
import './Styles/bgVid.css';
import PlayerInput from './Components/PlayerInput';
import PlayerResult from './Components/PlayerResult';
import backgroundVideo from './Assets/Videos/card_shuffle.mp4';

function App() {
  return (
    <div className="App">
      <video id="bgVid" loop autoPlay muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <PlayerInput></PlayerInput>
      <PlayerResult></PlayerResult>
    </div>
  );
}

export default App;
