import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const MyItem = () => {
      const [user]=useAuthState(auth);
      const [items,setItem]=useState([]);
      const navigate=useNavigate();

      useEffect(()=>{
      
            const getItem=async()=>{

              const email=user.email;

              const url =`https://sleepy-thicket-75359.herokuapp.com/itemsbyemail?email=${email}`;
            
              const {data}=await axios.get(url);
                console.log(data);
              
              setItem(data)
        }

        getItem();
            
      },[user])
      return (
            <div>
                <h1 className='text-center font-thin'>My Item</h1>  
                 <div className='grid grid-cols-1 lg:grid-cols-3 m-8 lg:m-10  gap-4'>
                       {
                       items.map(item=>(
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
                              <Button onClick={()=>navigate('/')} >HOME</Button>
                             </Card.Body>
                             
                             </Card>
                       ))
                 }
                 </div>
            </div>
      );
};

export default MyItem;