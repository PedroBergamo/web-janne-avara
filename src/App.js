import './css/App.css';
import Bio from './components/Bio.js'
import Julkaisut from './components/Julkaisut.js'
import Keikat from './components/Keikat.js'
import Yhteys from './components/Yhteys.js'
import Footer from './components/Footer.js'
import {Helmet} from 'react-helmet'

import SplashScreen from './components/SplashScreen.js'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Janne Avara - Official Website</title>
        <meta name="description" content="Website of singer-songwriter Janne Avara"/>
      </Helmet>
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
