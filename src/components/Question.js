
import Container from "react-bootstrap/esm/Container";

const Question = () => {
    return (
        <section className="p-4" style={{background: "var(--mainColor)"}}>
            <Container>
                <div className=" question d-flex text-light align-items-center">
                    <h1 className="fw-normal text-capitalize">Having any question</h1>
                    
                    <a href="/" className="bg-light text-dark fw-light text-capitalize text-decoration-none rounded p-2" style={{height: "fit-content"}}><strong>Contact us</strong></a>
                </div>
            </Container>
        </section>
    )
}

export default Question;