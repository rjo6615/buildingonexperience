import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import logo from "../images/logo.png";

function NavbarComponent() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const address = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.current.value === '') {
      setVisible(true);
    } if (email.current.value === '') {
      setVisible2(true);
    } if (message.current.value === '') {
      setVisible1(true);
    } if (address.current.value === '') {
      setVisible3(true);
    } else {
      sendMail();
    }
  };

  (function () {
    emailjs.init("lXIIIeccwD3sd6Wtl");
  })();

  function sendMail() {
    if (name.current.value && email.current.value && email.current.value) {
      var params = {
        from_name: name.current.value,
        from_email: email.current.value,
        reply_to: email.current.value,
        message: message.current.value,
        address: address.current.value,
      };
      emailjs.send('service_wzwnxdh', 'template_s78bjuj', params).then(function (res) {});
      alert("Thank you for sending a message!");
      window.location.reload(false);
    } else {
      alert('Failed to send message');
    }
  };

  const navbarStyle = {
    backgroundColor: 'rgba(3, 4, 94, 1)',
    position: 'fixed',
    width: '100%',
    zIndex: '10',
  };

  const linkStyle = {
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontFamily: "'Montserrat', 'sans-serif'"
  };

  const navbarHeight = 250;
  const customScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = navbarHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={navbarStyle}>
      <Navbar expand="lg" style={{ height: '75px' }}>
        <Container fluid>
        <div className="logo-image" style={{width: '80px', height: '70px', overflow: 'hidden', marginRight: '5px', marginBottom: '20px'}}>
            <img src={logo} className="img-fluid" alt="logo"></img>
        </div>
          <Navbar.Brand href="#" style={{ fontSize: '25px', fontWeight: 'bold', color: 'white', fontFamily: "'Montserrat', 'sans-serif'" }}>
            Building on Experience
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  />
          <Navbar.Collapse id="navbarScroll" style={{backgroundColor: 'rgba(3, 4, 94, 1)'}}>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className='button-pop-out mx-2' style={linkStyle} onClick={() => customScroll('home')}>
                Home
              </Nav.Link>
              <Nav.Link className='button-pop-out mx-2' style={linkStyle} onClick={() => customScroll('services')}>
                Services
              </Nav.Link>
              <Nav.Link className='button-pop-out mx-2' style={linkStyle} onClick={() => customScroll('gallery')}>
                Gallery
              </Nav.Link>
              <Nav.Link className='button-pop-out mx-2' style={linkStyle} onClick={() => customScroll('pricing')}>
                Pricing
              </Nav.Link>
              <Nav.Link className='button-pop-out mx-2' style={linkStyle} onClick={() => customScroll('aboutus')}>
                About Us
              </Nav.Link>
            </Nav>
            <Button
              className="float-right button-pop-out"
              style={{ backgroundColor: '#0077B6', borderColor: 'transparent', color: '#CAF0F8' }}
              onClick={handleShow}
            >
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: "'Montserrat', 'sans-serif'"}}>Request your Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit} className="px-3">
          <Form.Group className="mb-3 pt-3" controlId="formName">
            <Form.Control type="text" ref={name} placeholder="Name" />
            {visible && <div className="text-danger">Please enter your name</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control type="email" ref={email} placeholder={"Email"} pattern="^\S+@\S+\.(com|net|edu|org|gov)$" title="Please enter a valid email address ending with .com" />
            {visible2 && <div className="text-danger">Please enter your Email</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Control type="text" ref={address} placeholder="Job site address" />
            {visible3 && <div className="text-danger">Please enter your job site address</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control as="textarea" ref={message} rows={5} placeholder="Enter your message..."/>
            {visible1 && <div className="text-danger">Please enter your message</div>}
          </Form.Group>
          <div style={{ borderBottom: '2px solid rgba(3, 4, 94, 1)' }}></div>
          
          <div className="d-flex justify-content-center mt-3">
            <Button className="button-pop-out" style={{ backgroundColor: '#0077B6', borderColor: 'transparent', color: '#CAF0F8' }} type="submit">
              Submit
            </Button>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NavbarComponent;