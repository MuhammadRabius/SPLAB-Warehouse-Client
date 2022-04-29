import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useProducts from '../../CustomHooks/useProducts';

const ProductionItems = () => {
      const [products]=useProducts();
      return (
            <div>
                <h1 className='text-center font-thin pb-4'>SPLAB Product Medicine </h1> 
                
                <div>
                      {
                            products.map(product=>{
                              <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={product.img} />
                              <Card.Body>
                              <Card.Title>{product.name}</Card.Title>
                              <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                              </Card>
                            })
                      }
                </div>

            </div>
      );
};

export default ProductionItems;