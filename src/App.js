import './css/App.css';
import Bio from './components/Bio.js'
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
        <meta name="google-site-verification" content="-OWSjwiltN83uZL7V2pDDemn1oAm30_VlJNBDOUhG8c" />
      </Helmet>
        <SplashScreen/>
        <Bio/>
        <Keikat/>
        <Yhteys/>
        <Footer/>
    </div>
  );
}

export default App;
