import React from 'react';
import { useParams } from 'react-router-dom';
import useItemCategory from './../CustomHooks/useItemCategory';


const StockHouse = () => {
      const {itemId}=useParams();
      const [items] =useItemCategory(itemId);
      console.log(items.category);
      
      
      return (
            <div>
                 <h1>Hi is is stock house:{items}</h1> 
            </div>
      );
};

export default StockHouse;