import {Row, Col} from "react-bootstrap";
import Vinyl from "../images/vinyl-cover.jpg";
var BandCamp ="";

const Julkaisut = () =>
  <div className="julkaisut dark content">
    <h1>Julkaisut</h1>
    <Row>
      <Col xs={12} lg={6}>
        <img className="vinyl-cover" src={Vinyl} alt="vinyl-cover"/>
        <p>
        Kuulen puiden versovan<br/>
        (VINYYLI)<br/>
        Julkaisupäivä: 28.4.2023<br/>
        Eclipse Music
        </p>
      </Col>
      <Col xs={12} lg={6}>
        <iframe title="spotify-janne"
        src="https://open.spotify.com/embed/track/2g4gBK3XMLJ6xiChMf9Zf9?utm_source=generator&theme=0"
        width="100%" height="352" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
        </iframe>
        <a href={BandCamp} target="_blank" rel="noreferrer">
          Osta vinyyli
        </a>
      </Col>
    </Row>
  </div>



export default Julkaisut;
