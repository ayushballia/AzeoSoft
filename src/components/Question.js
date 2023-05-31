import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

const Question = () => {
    return (
        <section className="bg-primary p-4">
            <Container>
                <div className=" question d-flex text-light align-items-center">
                    <h2 className="display-2">Having any question</h2>
                    
                    <a href="/" className="bg-light text-dark display-6 text-decoration-none rounded p-2" style={{height: "fit-content"}}><strong>Contact us</strong></a>
                </div>
            </Container>
        </section>
    )
}

export default Question;