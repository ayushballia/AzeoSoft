import { Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer className="pt-2 bg-dark">
            <Container>
                <Row>
                    <div className="col-sm-3">
                        <h4 className="display-6">Quick Links</h4>
                        <ul>
                            <li className="lead">Home</li>
                            <li className="lead">find jobs</li>
                            <li className="lead">Post Jobs</li>
                            <li className="lead">About Us</li>
                            <li className="lead">Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="display-6">Popular Links</h4>
                        <ul>
                            <li className="lead">Home</li>
                            <li className="lead">find jobs</li>
                            <li className="lead">Post Jobs</li>
                            <li className="lead">About Us</li>
                            <li className="lead">Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="display-6">Get in Touch</h4>
                        <ul>
                            <li className="lead">Home</li>
                            <li className="lead">find jobs</li>
                            <li className="lead">Post Jobs</li>
                            <li className="lead">About Us</li>
                            <li className="lead">Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 className="display-6">Follow us</h4>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-google-plus"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </Row>

            </Container>
            <div style={{background: "#525c65", }}>
                <Row>
                        <p style={{textAlign: "center", margin: "0", paddingBlock: "1rem", fontSize: "1.2rem", color: "#fff"}}>All right reserved - Azeosoft web technologies Pvt Ltd</p>
                </Row>
                    </div>
        </footer>
    )
}

export default Footer;