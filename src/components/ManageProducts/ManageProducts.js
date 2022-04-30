import React from 'react';
import useProducts from '../CustomHooks/useProducts';
import ProductDetails from './../Home/ProductCategaory/ProductionDetails/ProductDetails';
import { Button, Card } from 'react-bootstrap';

const ManageProducts = () => {
       const [products]=useProducts();
      return (
            <div>
                 <h1 className='text-center font-thin pb-4'>SPLAB Product Medicine </h1> 
                
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 m-10 p-4 gap-4'>
                      {
                            products.map(product=> <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2">Medicine Name:{product.name}</Card.Subtitle>
                        <Card.Text>
                              Description: {product.description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 ">Supplier: {product.supplier}</Card.Subtitle>
                        <Card.Title>In Stock: {product.stock}</Card.Title>
                        <Button variant="primary">Dealer  Delivery</Button>
                        </Card.Body>
                        
                        </Card>
                         )
                      }
                </div>          
            </div>
      );
};

export default ManageProducts;