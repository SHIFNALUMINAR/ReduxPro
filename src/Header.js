import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Headers.css'
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/kisspng-service-brand-company-clip-art-food-contact-us-pinku-gupta-cook-and-caters-5ba310e51a1d55.085916261537413349107.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong className='p-3 mt-5'>Find Best</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
