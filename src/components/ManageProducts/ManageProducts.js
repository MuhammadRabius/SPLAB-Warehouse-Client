import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import useAllItem from './../CustomHooks/useAllItem';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
       const [items,setItem]=useAllItem();
       const navigate=useNavigate();
       
     
      const handleStock=id=>{
            navigate(`/items/${id}`);
           
      }

      const handleDelete=(itemId)=>{
            const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url =`http://localhost:5000/items/${itemId}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = items.filter(item => item._id !== itemId);
                setItem(remaining);
            })
        }
      };
      return (
            <div>
                 <h1 className='text-center font-thin pb-4'>SPLAB Medicine Item Category </h1> 
                
                <div className='grid grid-cols-1 lg:grid-cols-3 m-6 lg:m-10 p-4 gap-4'>
                      {
                         items.map(item=>  <Card key={item._id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2">Medicine Name:{item.category}</Card.Subtitle>
                        <Card.Text>
                              Description: {item.description}
                        </Card.Text>
                        <Card.Subtitle className="my-2 ">Supplier:{item.seller}</Card.Subtitle>
                        <Card.Title>In Stock: {item.stock}</Card.Title>
                        <Card.Subtitle className="my-2 ">Update/Added: {item?.date}</Card.Subtitle>
                        <Card.Subtitle className="my-2 ">Update/Added by: {item?.name}</Card.Subtitle>
                       
                        <Button className='my-2 w-full' onClick={()=>handleStock(item._id)} variant="primary">Manage Stock</Button>
                        <br />
                        <Button className=' w-full' onClick={()=>handleDelete(item._id)} variant="primary">Delete</Button>
                      
                        </Card.Body>
                        
                        </Card>
                         )
                      }
                </div>          
            </div>
      );
};

export default ManageProducts;