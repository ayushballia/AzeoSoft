import Container from "react-bootstrap/esm/Container"
import * as Icon from 'react-bootstrap-icons';
import { Col, Row } from "react-bootstrap";


const HowSection = () => {
    return (
        <section classname="how-it-works">
        <Container>
            <Row className="gy-2 text-center">
                <h2 className="section-title">How it <span> works</span></h2>
                <p className="text-muted" style={{textTransform: "capitalize"}}>Let's get started to get a job</p>
                <Col lg={4} style={{padding: "2rem 4rem", background: "#fff",}}>
                    <Icon.PersonFillAdd color="#756cf5" size="3em"/>          
                    <h4 className="mt-4">Create an Account</h4>
                    <p className="text-muted">Just submit your name and email id and you will be set up with a new account</p>
                </Col>
                <Col lg={4} style={{padding: "2rem 4rem",}}>
                <Icon.Search color="royalBlue" size="3em"/>
                    <h4 className="mt-4">Search Jobs</h4>
                    <p className="text-muted">After creating an account, look for the jobs that mactch your skill sets.</p>
                </Col>
                <Col lg={4} className="m-md-auto" style={{padding: "2rem 4rem", background: "#fff"}}>
                    <Icon.PersonFillCheck color="royalBlue" size="3em"/>
                    <h4 className="mt-4">Apply</h4>
                    <p className="text-muted">Found the perfect job for yourself? Now just apply. Its simple as that.</p>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default HowSection;