
import { useState, useEffect } from 'react';
const useItemCategory =itemId=>{
      
      const [items,setItem]=useState([]);
      useEffect(()=>{
            const url = `https://sleepy-thicket-75359.herokuapp.com/items/${itemId}`;
            fetch(url)
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[itemId])

      return [items]
}

export default useItemCategory;