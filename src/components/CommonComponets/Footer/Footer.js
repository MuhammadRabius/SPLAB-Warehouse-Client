import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillPhone,AiFillEnvironment,AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      
      return (
            <div className='bg-blue-500 p-4 '>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-32 items-center'>
                        <div className='text-white  font-thin'>
                              
                              <p className='flex items-center gap-2'> <AiFillEnvironment/>Any Issues: support.problem.ambivertit@gmail.com</p>
                              <p className='flex items-center gap-2'> <AiFillPhone/> +8802568000</p>
                        </div>

                        <div className='text-white font-thin text-center text-1xl'>
                              <h3>Useful Link</h3>
                              <Nav.Link className='text-white' as={Link} to='/' >Dashboard</Nav.Link>
                              <Nav.Link className='text-white' as={Link} to='/manageproducts'>Manage Stock</Nav.Link>
                               <Nav.Link className='text-white' as={Link} to='/additem'>Ad-Item/Update Item</Nav.Link>
                              <Nav.Link className='text-white' as={Link} to='/blog'>blog</Nav.Link>
                             

                        </div>
                        
                  </div>
                  <h4 className='flex justify-center items-center gap-2 text-white font-extralight mt-4'> All <AiOutlineCopyright/> {year} Reserved by Muhammad Rabius</h4>
            </div>
      );
};

export default Footer;