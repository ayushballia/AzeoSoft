import { Col, Container, Image, Row } from "react-bootstrap";
import webDesign from "../img/web-design.png";
import appDevelopment from "../img/app-development.png";
import webDevelopment from "../img/web-development.png";
import graphicDesigner from "../img/graphic-designer.png";
import phpDeveloper from "../img/php-code.png";
import coding1 from "../img/coding (1).png";
import {
  Calendar2CheckFill,
  CompassFill,
  CurrencyRupee,
} from "react-bootstrap-icons";

const FeatureSection = () => {
  return (
    <section className="feature-jobs" style={{ background: "#fafafa" }}>
      <Container>
        <Row pt={5}>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Featured <span> Jobs</span>
          </h2>
          <p
            className="text-muted"
            style={{ textAlign: "center", textTransform: "capitalize" }}
          >
            Let's get started to get a job
          </p>
          <Col sm={12} style={{}}>
            <Row className="shadow-sm rounded" style={{ alignItems: "center" }}>
              <Col md={2} className="p-4">
                <Image className="rounded p-4" src={graphicDesigner} fluid />
              </Col>
              <Col md={8}>
                <h4>UX/UI Designer, Web Designer</h4>
                <Row
                  className="text-muted"
                  style={{ width: "inherit", color: "#605e5c" }}
                >
                  <Col>
                    <p>
                      <Calendar2CheckFill /> 3-5 years
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CurrencyRupee /> 30K
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CompassFill /> Kolkatta west Bangal
                    </p>
                  </Col>
                </Row>
                <a
                  className="rounded"
                  href="/"
                  style={{
                    border: "1px dashed black",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  Full Time
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  className="rounded px-3 py-2"
                  href="/"
                  style={{
                    background: "var(--mainColor)",
                    color: "white",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  Save/apply
                </a>
              </Col>
            </Row>
            <Row className="shadow-sm rounded" style={{ alignItems: "center" }}>
              <Col md={2} className="p-4">
                <Image className="rounded p-4" src={appDevelopment} fluid />
              </Col>
              <Col md={8}>
                <h4>App Developer</h4>
                <Row
                  className="text-muted"
                  style={{ width: "inherit", color: "#605e5c" }}
                >
                  <Col>
                    <p>
                      <Calendar2CheckFill /> 3-5 years
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CurrencyRupee /> 30K
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CompassFill /> Kolkatta west Bangal
                    </p>
                  </Col>
                </Row>
                <a
                  className="rounded"
                  href="/"
                  style={{
                    border: "1px dashed black",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  Full Time
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  className="rounded px-3 py-2"
                  href="/"
                  style={{
                    background: "var(--mainColor)",
                    color: "white",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  Save/apply
                </a>
              </Col>
            </Row>
            <Row className="shadow-sm rounded" style={{ alignItems: "center" }}>
              <Col md={2} className="p-4">
                <Image className="rounded p-4" src={coding1} fluid />
              </Col>
              <Col md={8}>
                <h4>Frontend Developer, Web Designer</h4>
                <Row
                  className="text-muted"
                  style={{ width: "inherit", color: "#605e5c" }}
                >
                  <Col>
                    <p>
                      <Calendar2CheckFill /> 3-5 years
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CurrencyRupee /> 30K
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CompassFill /> Kolkatta west Bangal
                    </p>
                  </Col>
                </Row>
                <a
                  className="rounded"
                  href="/"
                  style={{
                    border: "1px dashed black",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  Full Time
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  className="rounded px-3 py-2"
                  href="/"
                  style={{
                    background: "var(--mainColor)",
                    color: "white",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  Save/apply
                </a>
              </Col>
            </Row>
            <Row className="shadow-sm rounded" style={{ alignItems: "center" }}>
              <Col md={2} className="p-4">
                <Image className="rounded p-4" src={phpDeveloper} fluid />
              </Col>
              <Col md={8}>
                <h4>PHP Developer</h4>
                <Row
                  className="text-muted"
                  style={{ width: "inherit", color: "#605e5c" }}
                >
                  <Col>
                    <p>
                      <Calendar2CheckFill /> 3-5 years
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CurrencyRupee /> 30K
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CompassFill /> Kolkatta west Bangal
                    </p>
                  </Col>
                </Row>
                <a
                  className="rounded"
                  href="/"
                  style={{
                    border: "1px dashed black",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  Full Time
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  className="rounded px-3 py-2"
                  href="/"
                  style={{
                    background: "var(--mainColor)",
                    color: "white",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  Save/apply
                </a>
              </Col>
            </Row>
            <Row className="shadow-sm rounded" style={{ alignItems: "center" }}>
              <Col md={2} className="p-4">
                <Image className="rounded p-4" src={webDesign} fluid />
              </Col>
              <Col md={8}>
                <h4>Full Stack Developer, Backend Designer</h4>
                <Row
                  className="text-muted"
                  style={{ width: "inherit", color: "#605e5c" }}
                >
                  <Col>
                    <p>
                      <Calendar2CheckFill /> 3-5 years
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CurrencyRupee /> 30K
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CompassFill /> Kolkatta west Bangal
                    </p>
                  </Col>
                </Row>
                <a
                  className="rounded"
                  href="/"
                  style={{
                    border: "1px dashed black",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  Full Time
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  className="rounded px-3 py-2"
                  href="/"
                  style={{
                    background: "var(--mainColor)",
                    color: "white",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  Save/apply
                </a>
              </Col>
            </Row>
            <Row className="shadow-sm rounded" style={{ alignItems: "center" }}>
              <Col md={2} className="p-4">
                <Image className="rounded p-4" src={webDevelopment} fluid />
              </Col>
              <Col md={8}>
                <h4>Senior Web Developer & SEO Expert</h4>
                <Row
                  className="text-muted"
                  style={{ width: "inherit", color: "#605e5c" }}
                >
                  <Col>
                    <p>
                      <Calendar2CheckFill /> 3-5 years
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CurrencyRupee /> 30K
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <CompassFill /> Kolkatta west Bangal
                    </p>
                  </Col>
                </Row>
                <a
                  className="rounded"
                  href="/"
                  style={{
                    border: "1px dashed black",
                    padding: "0.5rem 1rem",
                    textDecoration: "none",
                  }}
                >
                  Full Time
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  className="rounded px-3 py-2"
                  href="/"
                  style={{
                    background: "var(--mainColor)",
                    color: "white",
                    textDecoration: "none",
                    textTransform: "capitalize",
                  }}
                >
                  Save/apply
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
