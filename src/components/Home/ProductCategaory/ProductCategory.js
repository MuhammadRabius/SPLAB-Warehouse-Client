import React, { useState } from 'react';
import { Button, Card, } from 'react-bootstrap';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryDeatils from './CategoryDeatils/CategoryDeatils';
import useAllItem from '../../CustomHooks/useAllItem';


const ProductCategory = () => {
      
      const[items]=useAllItem();
      
      return (
            <div>
                   <h1 className='text-center font-thin pb-3'>SPLAB Medicine Category</h1>
                   <div className='grid grid-cols-1 lg:grid-cols-3 m-8 lg:m-10  gap-4'>
                         {
                               items.slice(0,6).map(item=>
                              <CategoryDeatils key={item._id} item={item}></CategoryDeatils>
                               )
                         }
                        
                   </div>
            </div>
      );
};

export default ProductCategory;