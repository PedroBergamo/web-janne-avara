import "../css/Components.css"

import SplashVideo from "../resources/janne-video.mp4";

import Logo from "../images/janne-logo-white.png";

var Video = "https://www.youtube.com/watch?v=8KsibZ0Hqxk";

const SplashScreen = () =>
  <div className="video-container">

      <video className="splash-video" autoPlay loop muted>
        <source src={SplashVideo} type="video/mp4"/>
      </video>

    <div className="logo">
      <img src={Logo} width="100vh" alt=""/>
    </div>

    <div className="video-button">
          <a href={Video} target= "_blank" rel="noreferrer">
          <h1>Kuulen puiden versovan</h1></a>
    </div>
  </div>

export default SplashScreen;
