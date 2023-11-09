import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  const navbarStyle = {
    backgroundColor: 'rgba(255, 183, 3, 0.8)',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  };

  const linkStyle = {
    backgroundColor: 'transparent',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    padding: '5px 10px',
    borderRadius: '30px',
    textDecoration: 'none',
  };

  return (
    <div style={navbarStyle}>
      <Navbar expand="lg" style={{ height: '75px' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: 'bold', color: 'black' }}>
            Handyman Template
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1" className='button-pop-out mx-2' style={linkStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className='button-pop-out mx-2' style={linkStyle}>
                Services
              </Nav.Link>
              <Nav.Link href="#action2" className='button-pop-out mx-2' style={linkStyle}>
                About Us
              </Nav.Link>
            </Nav>
            <Button
              className="float-right button-pop-out"
              style={{ backgroundColor: '#fb8500', borderColor: 'transparent', color: 'black' }}
            >
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;