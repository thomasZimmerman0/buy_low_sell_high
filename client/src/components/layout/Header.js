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
          <Navbar.Brand href="#home">Buy Low Sell High</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/buy">Stocks to buy</Nav.Link>
            <Nav.Link href="/sell">Stocks to sell</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header