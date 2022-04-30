import React, { useState } from 'react';
import { Button, Card, } from 'react-bootstrap';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCategory = () => {
      
      const [items,setItem]=useState([]);
      const navigate=useNavigate()

      useEffect(()=>{
            fetch('https://sleepy-thicket-75359.herokuapp.com/items')
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[])
      const handleStock=(id)=>{
            navigate(`/stockhouse/${id}`);
           
      }
      
      return (
            <div>
                   <h1 className='text-center font-thin pb-3'>SPLAB Medicine Category</h1>
                   <div className='grid grid-cols-1 lg:grid-cols-3 sm:m-2 lg:m-10  gap-4'>
                         {
                               items.map(item=>
                              <Card className='p-2' style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={item.img} />
                              <Card.Body >
                              <Card.Title>Category: {item.category}</Card.Title>
                              <Card.Text>
                                   Description: {item.description}
                              </Card.Text>
                               <Card.Subtitle className="mb-2">Seller: {item.seller}</Card.Subtitle>
                               <Card.Subtitle className="mb-2">Sell Per Unit:  {item.price}</Card.Subtitle>
                               <Card.Subtitle className="mb-2">In Stock :  {item.stock}</Card.Subtitle>
                              <Button onClick={handleStock(item._id)}> Manage Stock </Button>
                              
                              </Card.Body>
                             </Card>
                               )
                         }
                        
                   </div>
            </div>
      );
};

export default ProductCategory;