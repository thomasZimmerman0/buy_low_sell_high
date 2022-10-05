import React from 'react'
import {Link} from 'react-router-dom'
import '../components.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
  <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand to="/" className="navbar">Buy Low Sell High</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/buy" className="nav-link">Stocks to buy</Link>
            <Link to="/sell" className="nav-link">Stocks to sell</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header