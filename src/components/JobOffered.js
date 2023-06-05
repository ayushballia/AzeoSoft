import { Col, Container,Image,Row } from "react-bootstrap";
import google from "../img/google.png";
import microsoft from "../img/microsoft.png";
import apple from "../img/app-store.png";
import atom from "../img/atom.png";
const JobOffered = () => {
    return (
        <section className="job-offerd text-center">
            <Container>
                <Row>
                    <h2 className="section-title">Job offered by <span>Popular Companies</span></h2>
                    <p className="text-muted">Let's Get Started To Get A Job</p>
                    <Row>
                        <Col md={3} className="shadow-sm" style={{height:"fit-content",overflow: "hidden"}}>
                            <Image className="p-4" src={google} width="60%" height="45%"/>
                            <h4 className="fw-normal">Google inc</h4>
                            <p className="text-muted">After releasing several Google-first apps on iOS and android, Google has now started hiring iOS and android developers.</p>
                            <a className="w-100  d-block rounded align-self-end" href="/" style={{border: "1px dashed black", padding: "0.5rem 1rem", textDecoration: "none"}}>Browse Jobs</a>
                        </Col>
                        <Col md={3} className="shadow-sm" style={{height:"fit-content",overflow: "hidden"}}>
                            <Image className="p-4" src={microsoft} width="60%" height="45%"/>
                            <h4 className="fw-normal">Microsoft Co.</h4>
                            <p className="text-muted">Hires people with in-demand skills who have ability to tackle new challenges.</p>
                            <a className="w-100 d-block rounded align-self-end" href="/" style={{border: "1px dashed black", padding: "0.5rem 1rem", textDecoration: "none"}}>Browse Jobs</a>
                        </Col>
                        <Col md={3} className="shadow-sm" style={{height:"fit-content",overflow: "hidden"}}>
                            <Image className="p-4" src={apple} width="60%" height="45%"/>
                            <h4 className="fw-normal">Apple inc</h4>
                            <p className="text-muted">Apple is once again hiring ios developers for its company, if you know ios development you can easily get hired.</p>
                            <a className="w-100 d-block rounded align-self-end" href="/" style={{border: "1px dashed black", padding: "0.5rem 1rem", textDecoration: "none"}}>Browse Jobs</a>
                        </Col>
                        <Col md={3} className="shadow-sm" style={{height:"fit-content",overflow: "hidden"}}>
                            <Image className="p-4" src={atom} width="60%" height="45%"/>
                            <h4  className="fw-normal">Meta inc</h4>
                            <p className="text-muted">Meta hires software engineers every year, check what jobs are available for you.</p>
                            <a className="w-100 d-block rounded align-self-end" href="/" style={{border: "1px dashed black", padding: "0.5rem 1rem", textDecoration: "none"}}>Browse Jobs</a>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default JobOffered;