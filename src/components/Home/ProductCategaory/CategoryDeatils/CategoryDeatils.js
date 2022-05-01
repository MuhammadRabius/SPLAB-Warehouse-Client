import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CategoryDeatils = ({item}) => {
      const {_id,category,description,seller,price,stock,img}=item;
      const navigate=useNavigate()
     
      const handleStock=id=>{
            navigate(`/items/${id}`);
           
      }
      return (
            <div>
                 <Card className='p-2' style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={img} />
                              <Card.Body >
                              <Card.Title>Category: {category}</Card.Title>
                              <Card.Text>
                                   Description: {description}
                              </Card.Text>
                               <Card.Subtitle className="mb-2">Seller: {seller}</Card.Subtitle>
                               <Card.Subtitle className="mb-2">Sell Per Unit:  {price}</Card.Subtitle>
                               <Card.Subtitle className="mb-2">In Stock :  {stock}</Card.Subtitle>
                              <Button onClick={()=>handleStock(_id)} > Manage Stock </Button>
                             </Card.Body>
                             </Card> 
            </div>
      );
};

export default CategoryDeatils;