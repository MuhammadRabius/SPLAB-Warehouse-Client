import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useProducts from '../../CustomHooks/useProducts';
import ProductDetails from '../ProductCategaory/ProductionDetails/ProductDetails';
import './ProductionItems.css'

const ProductionItems = () => {
      const [products]=useProducts();
      return (
            <div>
                <h1 className='text-center font-thin pb-4'>SPLAB Product Medicine </h1> 
                
                <div className='grid grid-cols-1 lg:grid-cols-3 m-8 lg:m-10 lg:p-4 p-2 gap-4'>
                      {
                            products.slice(0,6).map(product=> <ProductDetails key={product._id} product={product} ></ProductDetails> )
                      }
                </div>
                
                  
            </div>
      );
};

export default ProductionItems;