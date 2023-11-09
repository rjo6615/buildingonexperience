import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  const navbarStyle = {
    backgroundColor: "#ffb703",
    opacity: '0.8',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  };

  return (
    <div style={navbarStyle}>
      <Navbar expand="lg" style={{ height: '75px' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: 'bold', color: '#023047' }}>
            Handyman Template
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll" style={{ backgroundColor: '#ffb703' }}>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1" style={{ fontSize: '20px', fontWeight: 'bold', color: '#023047' }}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" style={{ fontSize: '20px', fontWeight: 'bold', color: '#023047' }}>
                Services
              </Nav.Link>
              <Nav.Link href="#action2" style={{ fontSize: '20px', fontWeight: 'bold', color: '#023047' }}>
                About Us
              </Nav.Link>
            </Nav>
            <Button
              className="float-right"
              style={{ backgroundColor: '#fb8500', borderColor: '#fb8500', color: 'black' }}
            >
              Contact Us!
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
