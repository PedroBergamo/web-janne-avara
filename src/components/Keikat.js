import {Row, Col} from "react-bootstrap"


const Keika = (props) =>
  <div className="keika">
    <h1>{props.date}</h1>
    <p>{props.location}</p>
    <a href={props.link} target="_blank" rel="noreferrer">{props.linkType}</a>
  </div>

const Keikat = () =>
  <div className="dark keikat content">
    <h1>Keikat</h1>

    <Row>
      <Col className="d-none d-lg-block">
        <img src={require("../images/keika-kuva.jpg")} width="100%" alt="keikakuva"/>
      </Col>

      <Col>
        <Keika
          date="02.4"
          location="Helsinki - G-lab"
        />

        <Keika
          date="04.4"
          location="Helsinki"
          link=""
          linkType="Liput"
        />

      </Col>
    </Row>
  </div>

export default Keikat;
