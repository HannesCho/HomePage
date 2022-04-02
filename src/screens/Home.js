import { Col, Container, Row, Image } from "react-bootstrap";
import Fig from "../images/IMG_0009.JPG";
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg";
import jsIcon from "../images/js.svg";
import reactIcon from "../images/react.svg";
import bootstrapIcon from "../images/bootstrap.svg";
import gitIcon from "../images/git.svg";

const divStyle = {
  background:
    "linear-gradient(110deg, #6C757D, #6C757D 50%, #212529 50%, #212529)",
};

const textStyle = {
  letterSpacing: "1rem",
};

const iconStyle = {
  width: "3rem",
  height: "3rem",
};

const smallTitles =
  "mt-4 pt-3 pb-3 ps-3 text-center text-uppercase fs-2 fw-bold border border-dark border-4";
const rowClass = "m-0 d-flex flex-row align-items-center vh-100";
const colClass = "d-flex flex-column align-items-center";
const smallColClass = "d-flex flex-column align-items-center vh-100";

function Home() {
  return (
    <Container fluid className="vw-100 p-0 m-0 bg-secondary">
      <Row fluid="md" style={divStyle} className={rowClass}>
        <Col className={colClass}>
          <span className="m-0 fs-4">I am</span>
          <span className="m-0 ps-4 fs-1">Hannes Cho</span>
        </Col>
        <Col className={colClass}>
          <Image src={Fig} width={250} height={250} roundedCircle />
        </Col>
      </Row>
      <Row className="m-0 p-5 bg-dark text-white fs-6 fw-light">
        I am a junior full-stack developer with a variety of experience and
        knowledge. I have extensive experience in working as a team with people
        with various backgrounds across regions and fields. I have worked with
        diverse scientists on research teams, military officials, and people
        with various age groups from students to elders, and have cultivated
        essential communication and interpersonal skills that enable me to
        collaborate with other people.
      </Row>
      <Row fluid="md" className={rowClass}>
        <Col className={smallColClass}>
          <span className={smallTitles} style={textStyle}>
            About Me
          </span>
        </Col>
      </Row>
      <Row fluid="md" className={rowClass}>
        <Col className={smallColClass}>
          <span className={smallTitles} style={textStyle}>
            Skills
          </span>
          <Container className="d-flex flex-column border">
            <Row className="mt-4">
              <span className="fs-3 fw-bold text-uppercase">Using Now :</span>
            </Row>
            <Row className="m-3">
              <Col className={colClass}>
                <Image src={htmlIcon} style={iconStyle} roundedCircle />
                <span>HTML</span>
              </Col>
              <Col className={colClass}>
                <Image src={cssIcon} style={iconStyle} roundedCircle />
                <span>CSS</span>
              </Col>
              <Col className={colClass}>
                <Image src={jsIcon} style={iconStyle} roundedCircle />
                <span>JAVASCRIPT</span>
              </Col>
            </Row>
            <Row className="m-3">
              <Col className={colClass}>
                <Image src={reactIcon} style={iconStyle} roundedCircle />
                <span>REACT</span>
              </Col>
              <Col className={colClass}>
                <Image src={bootstrapIcon} style={iconStyle} roundedCircle />
                <span>BOOTSTRAP</span>
              </Col>
              <Col className={colClass}>
                <Image src={gitIcon} style={iconStyle} roundedCircle />
                <span>Git</span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row fluid="md" className={rowClass}>
        <Col className={smallColClass}>
          <span className={smallTitles} style={textStyle}>
            Portfolio
          </span>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
