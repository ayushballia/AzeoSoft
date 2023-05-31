import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";

const JobCatagories = () => {
  return (
    <section className="popular-job-categories bg-white">
      <Container>
        <Row
          className="job-categories justify-content-around gy-1"
          style={{ textAlign: "center" }}
        >
          <h2 className="section-title">
            Browse popular <span> job by catagories</span>
          </h2>
          <p className="text-muted mb-5">Lets get started to get a job</p>

          <Col
            md={6}
            lg={3}
            className="card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-python"></i>
            <h4>Python</h4>
            <p className="text-muted">
              India's no 1 simlified job portal explore python job oppenings in
              your desired location.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>

          <Col 
            md={6}
            lg={3}
            className="card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-node"></i>
            <h4>Node.js</h4>
            <p className="text-muted">
            If you're looking for the best ways to break into the world of Node JS, you are at the right place, just explore here.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>

          <Col
            md={6}
            lg={3}
            className="card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-react"></i>
            <h4>React</h4>
            <p className="text-muted">
            The demand for React js developers is growing at an unprecedented rate. Lets see what jobs you will find here.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>

          <Col
            md={6}
            lg={3}
            className="card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-php"></i>
            <h4>PHP</h4>
            <p className="text-muted">
            PHP is one of the most popular and widely used programming languages due to its built-in mechanisms.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>        
          <Col
            md={6}
            lg={3}
            className="card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-html5"></i>
            <h4>Frontend Designer</h4>
            <p className="text-muted">
            Get jobs as a frontend designer, As businesses explore for methods to improve their websites with rich aesthetics and potent web interactions.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>
          <Col
            md={6}
            lg={3}
            className="shadow card p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-angular"></i>
            <h4>Angular JS</h4>
            <p className="text-muted">
            There is a great need for angular developers as it is one of the top web development frameworks for creating UI (front-end), client-side web apps.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>
          <Col
            md={6}
            lg={3}
            className="card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-apple"></i>
            <h4
            
              style={{ textTransform: "none" }}
            >
              ios Developer
            </h4>
            <p className="text-muted">
            iOS developers are in high demand as the mobile market grows exponentially. Since Apple is the primary target of the majority.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>
          <Col
            md={6}
            lg={3}
            className=" card shadow p-4 bg-light border rounded"
          >
            <i class="fa-brands fa-android"></i>
            <h4>Android</h4>
            <p className="text-muted">
            Android developers of all experience levels are in great demand. Numerous jobs opportunities are available as Android apps' popularity.
            </p>
            <a href='/' className='btn job-btn'>Browse Jobs</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default JobCatagories;
