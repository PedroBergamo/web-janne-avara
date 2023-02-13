import './css/App.css';
import Bio from './components/Bio.js'
import Julkaisut from './components/Julkaisut.js'

import SplashScreen from './components/SplashScreen.js'

function App() {
  return (
    <div className="App">
      <SplashScreen/>
      <Bio/>
      <Julkaisut/>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
