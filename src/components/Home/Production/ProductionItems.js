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
                
                <div className='grid grid-cols-3 m-10 p-4 gap-4'>
                      {
                            products.slice(0,6).map(product=> <ProductDetails key={product._id} product={product} ></ProductDetails> )
                      }
                </div>
                
                  <div className='manage-btn '>
                        <button >Manage All Product</button>
                  </div>
            </div>
      );
};

export default ProductionItems;