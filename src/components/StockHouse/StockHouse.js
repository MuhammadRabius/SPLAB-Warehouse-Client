import React from 'react';
import { useParams } from 'react-router-dom';
import useItemCategory from './../CustomHooks/useItemCategory';


const StockHouse = () => {
      const {itemId}=useParams();
      const [item] =useItemCategory(itemId);
      
      
      
      return (
            <div>
                 <h1>Hi is is stock house:{item.category}</h1> 
            </div>
      );
};

export default StockHouse;