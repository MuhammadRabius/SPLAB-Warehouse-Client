import { useEffect, useState } from "react";

const useAllItem =()=>{

      const [items,setItem]=useState([]);
     

      useEffect(()=>{
            fetch('https://sleepy-thicket-75359.herokuapp.com/items')
            .then(res=>res.json())
            .then(data=>setItem(data))
      },[]);

      return [items,setItem]
      
}

export default useAllItem;