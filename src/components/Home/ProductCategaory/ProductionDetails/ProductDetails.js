import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductDetails = ({product}) => {
      const {name,img,category,description,supplier,stock}=product;
      return (
            <div >
                  <div >
                         <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2">Medicine Name:{name}</Card.Subtitle>
                        <Card.Text>
                              Description:{description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 ">Supplier{supplier}</Card.Subtitle>
                        <Card.Title>In Stock:{stock}</Card.Title>
                        <Button variant="primary">Update Inventory</Button>
                        </Card.Body>
                        </Card>
                  </div>
            </div>
      );
};

export default ProductDetails;