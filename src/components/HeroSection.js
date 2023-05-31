import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Design from "../img/Design.png";
import { Image } from "react-bootstrap";


const HeroSection = () => {
    return (

        <div className="hero-section">
        <Container>
            <Row className="align-items-center">
                <Col md={6} >
                    <h1 className="header-title">Looking for a <span> great</span> job</h1>
                    <p className="lead">
                        Finding a great job is though. We match you with perfect opportunity based on your skill and experience. Its like having your personal HR expert! Hiring managers love our service because it saves them so much time and money, just try us out.
                    </p>
                    <a href='/' className='btn nav-btn myBtn'>Apply Now</a> 
                    <span> </span><a href='/' className='btn nav-btn myBtn'>Post Jobs</a> 
                    
                </Col>
                <Col md={5}>
                    <Image  src={Design} fluid />
                </Col>
            </Row>
        </Container>
            </div>
    )
}


export default HeroSection;