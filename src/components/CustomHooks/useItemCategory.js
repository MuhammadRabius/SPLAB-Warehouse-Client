
import { useState, useEffect } from 'react';
const useItemCategory =(itemId)=>{
      
      const [item,setItem]=useState({});
      
      useEffect(()=>{
           
             fetch(` https://sleepy-thicket-75359.herokuapp.com/items/${itemId}`)
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[itemId]);

      return [item];
}

export default useItemCategory;