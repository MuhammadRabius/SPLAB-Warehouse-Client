import React, { useState } from 'react';
import { Button, Card, } from 'react-bootstrap';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryDeatils from './CategoryDeatils/CategoryDeatils';


const ProductCategory = () => {
      
      const [items,setItem]=useState([]);
     

      useEffect(()=>{
            fetch('https://sleepy-thicket-75359.herokuapp.com/items')
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[]);
      
      
      return (
            <div>
                   <h1 className='text-center font-thin pb-3'>SPLAB Medicine Category</h1>
                   <div className='grid grid-cols-1 lg:grid-cols-3 sm:m-2 lg:m-10  gap-4'>
                         {
                               items.map(item=>
                              <CategoryDeatils key={item._id} item={item}></CategoryDeatils>
                               )
                         }
                        
                   </div>
            </div>
      );
};

export default ProductCategory;