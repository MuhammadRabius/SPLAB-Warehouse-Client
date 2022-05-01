import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useAllItem from './../CustomHooks/useAllItem';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
       const [items]=useAllItem();
       const navigate=useNavigate()
     
      const handleStock=id=>{
            navigate(`/items/${id}`);
           
      }
      return (
            <div>
                 <h1 className='text-center font-thin pb-4'>SPLAB Medicine Item Category </h1> 
                
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 m-10 p-4 gap-4'>
                      {
                            items.map(item=>  <Card key={item._id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2">Medicine Name:{item.category}</Card.Subtitle>
                        <Card.Text>
                              Description: {item.description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 ">Supplier: {item.supplier}</Card.Subtitle>
                        <Card.Title>In Stock: {item.stock}</Card.Title>
                        <Button onClick={()=>handleStock(item._id)} variant="primary">Manage Stock</Button>
                        </Card.Body>
                        
                        </Card>
                         )
                      }
                </div>          
            </div>
      );
};

export default ManageProducts;