import { useEffect, useState } from "react";

const useAllItem =()=>{

      const [items,setItem]=useState([]);
     

      useEffect(()=>{
            fetch('http://localhost:5000/items')
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[]);

      return [items,setItem]
      
}

export default useAllItem;