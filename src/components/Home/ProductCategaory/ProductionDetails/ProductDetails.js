import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({product}) => {
      const {name,img,category,description,supplier,stock}=product;
      let navigate = useNavigate();
      const handleUpdate=()=>{
            navigate('/manageproducts');
      }
      return (
            <div >
                  <div >
                         <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Subtitle className="mb-2">Medicine Name:{name}</Card.Subtitle>
                        <Card.Text>
                              Description: {description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 ">Supplier: {supplier}</Card.Subtitle>
                        <Button variant="primary" onClick={handleUpdate}>Update Inventory</Button>
                        </Card.Body>
                        
                        </Card>
                        
                  </div>
            </div>
      );
};

export default ProductDetails;