import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/logo.png' 
import auth from '../../firebase.init';
import { HiUserCircle} from "react-icons/hi";

const Header = () => {

      const navigate =useNavigate();
      
      const [user]=useAuthState(auth);
    
      return (
            <div className='nav-container'>
                  <Navbar collapseOnSelect expand="lg" className='text-black hover:text-blue-700 bg-white-500 '>
                   <Container className='gap-8 p-2 fs-6 '>
                   <Navbar.Brand className='lg:flex lg:justify-center lg:items-center font-thin gap-2 mx-auto' as={Link} to='/'> <img className=' w-20 lg:w-18 h-16 lg:h-14 mx-auto' src={logo} alt="" />SPLAB STOCK MANAGEMENT</Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="me-auto gap-2 ">
                        <Nav.Link as={Link} to='/'>Dashboard</Nav.Link>
                        <Nav.Link as={Link} to='/manageproducts'>Manage Stock</Nav.Link>
                              
                              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                              {
                                    user&&<>
                                    <Nav.Link as={Link} to='/agents'>Agents</Nav.Link>
                                    <HiUserCircle/> <NavDropdown title={user.displayName}
                                      id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to='/manageproducts'>Manage Items</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/additem'>Add Item</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/myitem'>My Item</NavDropdown.Item>
                                    
                                    </NavDropdown>
                                    
                                    </>
                              }
                        </Nav>
                        
                        
                        {
                              user?
                              <button onClick={()=>{
                                    signOut(auth)
                                    navigate('/login');
                              
                              }} className='border-2 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 '>Sing Out</button>
                              :
                              <Nav.Link className='border-2 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 ' as={Link} to='/login'>Login</Nav.Link>
                        }
                        
                       
                        
                       
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
            </div>
      );
};
export default Header;