import React from 'react'
import {Link} from 'react-router-dom'
import '../components.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
  <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand to="/" className="navbar">Buy Low Sell High</Navbar.Brand>
          <Nav className="ms-auto">
            <a target="_blank" href="https://github.com/thomasZimmerman0" className="nav-link"><img width="30" src="https://imgs.search.brave.com/QUGJEwEtUch0p8IlAM_m_QkLwXr20z-2M_NdY0Z7xXQ/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/aWNvbnNkYi5jb20v/aWNvbnMvZG93bmxv/YWQvd2hpdGUvZ2l0/aHViLTktNTEyLnBu/Zw"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/thomas-zimmerman-76843824b" className="nav-link"><img width="30" src="https://imgs.search.brave.com/fi9wvaQ1lMa4-28k3jLZlERN5S2Ww8cJH6OhiTk-Xdk/rs:fit:256:256:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvbGlua2Vk/aW4td2hpdGUtbG9n/by0yLnBuZw"/></a>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer