import {Row, Col} from "react-bootstrap";
import * as React from 'react';

const NytKeikat =() => {
  return(
    <div>
      <Keikka
        date="11.5.23"
        location="Siltanen"
      />
      <Keikka
        date="19.5.23"
        location="Bar Ö"
      />
      <Keikka
        date="02.06.23"
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
          <Keikka
            date="01.12.22"
            location="Bar Loose"
          />
          <Keikka
            date="24.11.22"
            location="Secret Sauceity"
          />
          <Keikka
            date="05.10.22"
            location="Ravintola Tanner"
          />
          <Keikka
            date="31.8.22"
            location="Ravintola Tenho"
          />
          <Keikka
            date="16.08.22"
            location="Espan Lava"
          />
          <Keikka
            date="07.8.21"
            location="Elos Fest"
          />
        </div>
      : null}
    </div>
  )
}

const Keikka = (props) =>
  <div className="keika">
    <h1>{props.date}</h1>
    <p>{props.location}</p>
    <a href={props.link} target="_blank" rel="noreferrer">{props.linkType}</a>
  </div>

const Keikat = () =>
  <div className="dark keikat content">
    <h1>Keikat</h1>

    <Row>
      <Col lg={7} className="d-none d-lg-block">
        <img className="keika-kuva" src={require("../images/keika-kuva-3.jpg")} width="80%" alt="keikakuva"/>
      </Col>

      <Col>
        <NytKeikat/>
        <MenneetKeikat/>
      </Col>
        <Col className="d-none d-lg-block">
      </Col>
    </Row>
  </div>

export default Keikat;
