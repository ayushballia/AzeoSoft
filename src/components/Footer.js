import { Container, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="pt-2 bg-dark">
      <Container>
        <Row>
          <div className="col-sm-3">
            <h4 className="mb-3 fw-normal">Quick Links</h4>
            <ul style={{ paddingInlineStart: "0" }}>
              <li className="text-capitalize">
                <ChevronRight /> Home
              </li>
              <li className="text-capitalize">
                <ChevronRight /> find jobs
              </li>
              <li className="text-capitalize">
                <ChevronRight /> Post Jobs
              </li>
              <li className="text-capitalize">
                <ChevronRight /> About Us
              </li>
              <li className="text-capitalize">
                <ChevronRight /> Contact Us
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h4 className="mb-3 fw-normal">Get In Touch</h4>
            <ul style={{ paddingInlineStart: "0" }}>
              <li className="text-capitalize">
                <ChevronRight /> Home
              </li>
              <li className="text-capitalize">
                <ChevronRight /> find jobs
              </li>
              <li className="text-capitalize">
                <ChevronRight /> Post Jobs
              </li>
              <li className="text-capitalize">
                <ChevronRight /> About Us
              </li>
              <li className="text-capitalize">
                <ChevronRight /> Contact Us
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h4 className="mb-3 fw-normal">Popular Links</h4>
            <ul style={{ paddingInlineStart: "0" }}>
              <li className="text-capitalize">
                <ChevronRight /> Home
              </li>
              <li className="text-capitalize">
                <ChevronRight /> find jobs
              </li>
              <li className="text-capitalize">
                <ChevronRight /> Post Jobs
              </li>
              <li className="text-capitalize">
                <ChevronRight /> About Us
              </li>
              <li className="text-capitalize">
                <ChevronRight /> Contact Us
              </li>
            </ul>
          </div>
          
          <div className="col-sm-3">
            <h4 className="display-6">Follow us</h4>
            <div className="d-flex justify-content-between">
                <i class="fa-brands fa-facebook"/>
                <i class="fa-brands fa-instagram"/>
                <i class="fa-brands fa-google-plus"/>
                <i class="fa-brands fa-linkedin"/>                
            </div>
          </div>
        </Row>
      </Container>
      <div style={{ background: "#525c65" }}>
        <Row>
          <p
            style={{
              textAlign: "center",
              margin: "0",
              paddingBlock: "1rem",
              fontSize: "1.2rem",
              color: "#fff",
            }}
          >
            All right reserved - Azeosoft web technologies Pvt Ltd
          </p>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
