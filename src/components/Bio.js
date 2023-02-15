import { Row, Col} from "react-bootstrap";
import Janne from "../images/Janne-1.jpg";

const Bio = () =>
  <div className="bio content">
  <Row>
    <Col xs={12} lg={6}>
      <img src={Janne} width="100%" alt="Janne"/>
    </Col>

    <Col xs={12} lg={6}>
      <h1>Bio</h1>
      <p>
      Janne Avara on laulaja/lauluntekijä,
      jonka musiikissa yhdistyvät tunnelmalliset
      melodiat ja pohdiskelevat eksistentiaaliset
      aiheet, kuten yksilön ja yhteiskunnan
      suhde sekä halu kokea
      läsnäolevan hetken ainutkertaisuus.
      Kapinallisten ajattelijoiden inspiraationa
       vuodesta 2021 toiminut,
      Janne tarjoaa vaelteleville
      sieluille kokonaisvaltaisen
      yhteyden itseensä energisen
      ja karismaattisen esiintymisen välityksellä.
      </p>
    </Col>
  </Row>
  </div>


export default Bio;
