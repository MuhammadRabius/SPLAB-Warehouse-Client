import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useProducts from '../../CustomHooks/useProducts';
import './Dashboard.css';

const Dashboard = () => {
      const [products]=useProducts();
      
      return (
            
            <div className='bg-slate-50 m-2 p-4'>
                 <h1 className='text-center font-thin pb-4'>SPLAB Dashboard</h1>
                 <div className='grid grid-cols-01 md:grid-cols-2 lg:grid-cols-3 m-2 lg:m-8 p-2 lg:p-5 gap-3'>
                       <div>
                              <Card  style={{ width: '18rem' }}>
                              <Card.Body className='bg-sky-500 text-center text-white '>
                              <Card.Title >In-Line Medicine Category</Card.Title>
                              <Card.Text>
                                    <h1>{products.length}</h1>
                              </Card.Text>
                              
                              </Card.Body>
                              </Card>
                       </div>
                       <div>
                              <Card  style={{ width: '18rem' }}>
                              <Card.Body className='bg-blue-500 text-center text-white'>
                              <Card.Title >In-Line Production Items</Card.Title>
                              <Card.Text>
                                    <h1>30</h1>
                              </Card.Text>
                              
                              </Card.Body>
                              </Card>
                       </div>
                       <div>
                              <Card  style={{ width: '18rem' }}>
                              <Card.Body className='bg-cyan-500 text-center text-white'>
                              <Card.Title >Our Employee</Card.Title>
                              <Card.Text>
                                    <h1>300</h1>
                              </Card.Text>
                              
                              </Card.Body>
                              </Card>
                       </div>
                 </div>

            </div>
      );
};

export default Dashboard;