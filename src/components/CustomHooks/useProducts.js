import { useEffect, useState } from "react";

const useProducts=()=> {

      const [products,setProducts]=useState([]);

      useEffect(()=>{
            fetch('https://sleepy-thicket-75359.herokuapp.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
      },[])

      return [products];
      
} 

export default useProducts;