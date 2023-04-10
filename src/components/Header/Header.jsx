import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to = '/' style={{ color:'white', textDecoration: 'none' }}>
              A&B
            </Link>
          </Navbar.Brand>

          <Nav>
            <Nav.Link>
              <Link to = '/' style={{ color:'white', textDecoration: 'none' }}>
                Главное
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to = '/favorites' style={{ color:'white', textDecoration: 'none' }}>
                Избранное
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to = '/cart' style={{ color:'white', textDecoration: 'none' }}>
                Корзина
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to = '/description' style={{ color:'white', textDecoration: 'none' }}>
                Описание
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;