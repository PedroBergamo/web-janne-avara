import {Row, Col} from "react-bootstrap";
import Vinyl from "../images/vinyl-cover.jpg";

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

          Osta vinyyli
        </a>
      </Col>
    </Row>
  </div>



export default Julkaisut;
