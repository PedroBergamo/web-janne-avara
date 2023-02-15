import {Row, Col} from "react-bootstrap";
import * as React from 'react';

const NytKeikat =() => {
  return(
    <div>
      <Keika
        date="11.5.23"
        location="Siltanen"
      />
      <Keika
        date="19.5.23"
        location="Bar Ö"
      />
      <Keika
        date="19.5.23"
        location="Vastavirta"
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
            date="01.12.22"
            location="Bar Loose"
          />
          <Keika
            date="24.11.22"
            location="Secret Sauceity"
          />
          <Keika
            date="05.10.22"
            location="Ravintola Tanner"
          />
          <Keika
            date="31.8.22"
            location="Ravintola Tenho"
          />
          <Keika
            date="16.08.22"
            location="Espan Lava"
          />
          <Keika
            date="07.8.21"
            location="Elos Fest"
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
