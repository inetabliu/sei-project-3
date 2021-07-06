import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { Navbar, Nav , Container, Image } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'


const Navigation = () => {
  const [smShow, setSmShow] = useState(false)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="nav-style" >
        <Container>
          <Navbar.Brand href="/" ><Image src="https://res.cloudinary.com/inetab/image/upload/c_scale,q_100,r_0,w_60/a_0/v1625566335/logo_size_vfeyuq.jpg" roundedCircle/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-style-color" href="/about">About</Nav.Link>
              <NavDropdown className="text-style-color" title="Our Products" id="basic-nav-dropdown">
                <Link to="/products"><li className="dropdown-item" >Overview <i className="fas fa-paw"></i></li></Link>
                <Link to="/cats"><li className="dropdown-item">Cats <i className="fas fa-cat"></i></li></Link>
                <Link to="/dogs"><li className="dropdown-item">Dogs <i className="fas fa-dog"></i></li></Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="text-style-color" href="/register">Register</Nav.Link>
              <Nav.Link className="text-style-color" eventKey={2} href="/login">
              Login
              </Nav.Link>
              <Nav.Link onClick={() => setSmShow(true)}><i className="fas fa-shopping-bag"></i></Nav.Link>{' '}
              <Modal
                size="m"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    <Image src="https://res.cloudinary.com/inetab/image/upload/v1625583602/logo_size_htxzty.jpg"/>
                    Your Shopping Cart
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>Products will go in here</Modal.Body>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </>
  )






  
}

export default Navigation
