import './css/App.css';
import Bio from './components/Bio.js'
import Julkaisut from './components/Julkaisut.js'
import Keikat from './components/Keikat.js'
import Yhteys from './components/Yhteys.js'
import Footer from './components/Footer.js'

import SplashScreen from './components/SplashScreen.js'

function App() {
  return (
    <div className="App">
      <SplashScreen/>
        <Bio/>
        <Julkaisut/>
        <Keikat/>
        <Yhteys/>
        <Footer/>
    </div>
  );
}

export default App;
