import { Row, Col} from "react-bootstrap";
import Janne from "../images/Janne-1.jpg";

const Bio = () =>
  <div className="bio">
  <Row>
    <Col xs={12} lg={4}>
      <img src={Janne} width="100%" alt="Janne"/>
    </Col>

    <Col>
      <h1>Bio</h1>
      <p>
      Janne Avara is a human being who sings and writes songs about nature. Living in the forests of Nuuksio, Finland, Avara is the voice of rebellious thinkers, providing to wondering souls a holistic connection with themselves by soft music delivered through an energetic performance.
      His new album follows the formula of his well received previous releases, combining atmospheric melodies with thoughtful lyrics about a varied set of topics such as human existence, wilderness and the urge to live in the present moment.
      </p>
    </Col>
  </Row>
  </div>


export default Bio;
