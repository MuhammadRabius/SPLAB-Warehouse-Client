
import { useState, useEffect } from 'react';
const useItemCategory =(itemId)=>{
      
      const [item,setItem]=useState({});
      
      useEffect(()=>{
           
             fetch(`http://localhost:5000/items/${itemId}`)
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[itemId]);

      return [item];
}

export default useItemCategory;