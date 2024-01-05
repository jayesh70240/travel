import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './navbar.css'

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Travel</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#Services" className="text-white ml-30">Services</Nav.Link>
            <Nav.Link href="#Products" className="text-white ml-30">Products</Nav.Link>
            <div className='ml-25'>
                <Button variant="outline-light">SIGN UP</Button>{' '}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;