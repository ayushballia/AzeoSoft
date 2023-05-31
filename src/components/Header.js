import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeroSection from './HeroSection';


const Header = () => {
    return (
        <header className='header'>
            <Navbar bg="#fafafa" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"  className='logo'>AzeoSoft</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto fs-5 h2 ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link1">Find Jobs</Nav.Link>
                        <Nav.Link href="#link2">Employer Page</Nav.Link>
                        <Nav.Link href="#link3">About Us</Nav.Link>
                        <Nav.Link href="#link4">Contact Us</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <a href='/' className='btn nav-btn myBtn'>Login/Register</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <HeroSection/>
        </header>
    )
}

export default Header;