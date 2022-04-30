import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/logo.png' 
import auth from '../../firebase.init';

const Header = () => {
      const [user]=useAuthState(auth);
      return (
            <div>
                        <Navbar className='py-2 '>
                        <Container>
                        <Navbar.Brand className='d-flex justify-center items-center font-extralight gap-2' as={Link} to='/'> <img className='w-18 h-14' src={logo} alt="" />Sreepur Laboratories Management</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-14" >
                              <Nav.Link as={Link} to='/'>Dashboard</Nav.Link>
                              <Nav.Link as={Link} to='/manageproducts'>Manage Products</Nav.Link>
                              <Nav.Link as={Link} to='/agents'>Agents</Nav.Link>
                              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                              
                        
                        </Nav>
                        <Nav>
                              {
                              user?
                              
                              <button onClick={()=>signOut(auth)} className='border-1 rounded-lg p-1 mx-2 text-black hover:bg-blue-400 '>Sing Out</button>
                              :
                              <Nav.Link className='border-1 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 ' as={Link} to='/login'>Login</Nav.Link>
                        }
                        </Nav>
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
            </div>
      );
};

export default Header;