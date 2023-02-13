import {Row, Col} from "react-bootstrap";
import * as React from 'react';


const NytKeikat =() => {
  return(
    <div>
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
    </div>
  )
}

const MenneetKeikat = () => {
  const [isShow, setShow] = React.useState(false);
  const handleToggle =() => {
      setShow(!isShow);
  };

  return(
    <div>
      <button onClick={handleToggle} type="button">
        Menneet Keikat
      </button>
      {isShow ?
        <div>
          <Keika
            date="02.3"
            location="Helsinki - G-lab"
          />
          <Keika
            date="02.2"
            location="Helsinki - G-lab"
          />
        </div>
      : null}
    </div>
  )
}


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
        <NytKeikat/>
        <MenneetKeikat/>
      </Col>
    </Row>
  </div>

export default Keikat;
