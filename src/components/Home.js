import React from "react";
import {Card, Container, Row}from 'react-bootstrap';
import toolsBackground from "../images/background.jpg";
// import {MDBCarousel, MDBCarouselItem, MDBCarouselCaption} from 'mdb-react-ui-kit';

function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }  
  window.addEventListener("scroll", reveal);
  return (
    <div>
<section class="">
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{height: "700px", background: 'url(' + toolsBackground + ')'}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0 slideInLeft" style={{marginTop: '100px'}}>
          <h1 class="my-5 display-3 fw-bold ls-tight" style={{color: '#ffb703'}}>
            The best offer <br />
            <span style={{color: '#fb8500'}}>for your business</span> <br />
          </h1>
          <h3>
          <span style={{color: '#fb8500'}}>Call Us 555-555-5555</span>
          </h3>
        </div>
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="">
            <div class="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<center>
<Container className="slideInRight" style={{marginTop: '-100px'}}>
  <Row className="d-flex flex-wrap justify-content-center">
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
      <Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
  <Card.Header className="fa-solid fa-screwdriver py-5" style={{fontSize: '100px', backgroundColor: '#ffb703'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Repairs</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
<Card.Header className="fa-solid fa-paint-roller py-5" style={{fontSize: '100px', backgroundColor: '#ffb703'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Painting</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
<Card.Header className="fa-solid fa-wrench py-5" style={{fontSize: '100px', backgroundColor: '#ffb703'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Plumbing</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div className="col-xl-3 col-lg-6 col-md-6 col-sm-8">
<Card className="text-black mt-4 mx-3" style={{ width: '18rem', height: '30rem', backgroundColor: 'white', borderStyle: 'none' }}>
<Card.Header className="fa-solid fa-plug py-5" style={{fontSize: '100px', backgroundColor: '#ffb703'}}></Card.Header>
  <Card.Body className="d-flex flex-column">
    <Card.Title style={{color: '#023047', fontSize: '30px', fontFamily: "Dancing Script, cursive"}} className='mb-4'>Electric</Card.Title>
    <Card.Text>
      <ul className='mb-5'>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 1</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 2</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 3</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 4</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 5</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 6</li>
        <li style={{ listStyle: "disc", color: '#023047' }}>Feature 7</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
</div>
    </Row>
  </Container>
  </center>
<div class="container reveal">
  <section class="text-center mt-5">
    <h4 class="mb-4"><strong>Pricing</strong></h4>
    <div class="row gx-lg-5">
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card" style={{borderColor: '#fb8500'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>General Repairs</strong></p>
            <h5 class="mb-0">$75 show up fee + $100/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card" style={{borderColor: '#fb8500'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>Painting</strong></p>
            <h5 class="mb-0">$75 show up fee + $80/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card" style={{borderColor: '#fb8500'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>Plumbing</strong></p>
            <h5 class="mb-0">$75 show up fee + $120/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card" style={{borderColor: '#fb8500'}}>
          <div class="card-header bg-white py-3">
            <p class="text-uppercase small mb-2"><strong>Electric</strong></p>
            <h5 class="mb-0">$75 show up fee + $150/hour</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
              <li class="list-group-item">Feature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<section class="text-center">
  <div class="p-5 bg-image" style={{
        backgroundImage: 'url(' + toolsBackground + ')',
        height: "300px",
        marginBottom: "-150px"}}></div>
  <div class="row">
    <div class="col-md-6 reveal">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '800px',
          height: '420px'}}>
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5">About Us</h2>
              <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 reveal">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '800px',
          height: '420px'
          }}>
                <div class="">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                class="rounded-circle img-fluid" alt="" style={{width: "100px"}} />
            </div>
            <h4 class="mb-2">Julie L. Arsenault</h4>
            <p class="text-muted mb-4">Owner <span class="mx-2">|</span>
                Handyman Template</p>
            <center>
            <button type="button" class="btn btn-rounded btn-lg" style={{maxWidth: '200px', backgroundColor: '#fb8500'}}>
              Contact Us!
            </button>
            </center>
            <div class="d-flex justify-content-between text-center mt-5 mb-2 mx-5">
              <div>
                <p class="mb-2 h5">30+</p>
                <p class="text-muted mb-0">Years Experience</p>
              </div>
              <div class="px-3">
                <p class="mb-2 h5">8512</p>
                <p class="text-muted mb-0">Income amounts</p>
              </div>
              <div>
                <p class="mb-2 h5">4751</p>
                <p class="text-muted mb-0">Total Transactions</p>
              </div>
            </div>
      </div>
    </div>
  </div>
</section>
</div>    
  );
}

export default Home;
