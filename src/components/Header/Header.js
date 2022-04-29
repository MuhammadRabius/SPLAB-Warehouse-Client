import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png' 

const Header = () => {
      return (
            <div>
                        <Navbar className='py-2'>
                        <Container>
                        <Navbar.Brand className='d-flex justify-center items-center font-bold gap-2' as={Link} to='/'> <img className='w-18 h-14' src={logo} alt="" />Sreepur Lab Unani</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-14" >
                              <Nav.Link as={Link} to='/'>Home</Nav.Link>
                              <Nav.Link as={Link} to='/manageproducts'>Manage Products</Nav.Link>
                              <Nav.Link as={Link} to='/agents'>Agents</Nav.Link>
                              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                              
                        
                        </Nav>
                        <Nav>
                              <Nav.Link as={Link} to='/blog'>Login</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
            </div>
      );
};

export default Header;