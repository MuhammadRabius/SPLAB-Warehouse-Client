import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Agents = () => {
      const {state}=useLocation();
      const [stock,setStock]=useState();
      const navigate=useNavigate();
      const handleUpdateStock=(e)=>{
          e.preventDefault();
          console.log(state.item._id)
          fetch(`https://sleepy-thicket-75359.herokuapp.com/items_delivery/${state.item._id}`
          ,
          {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({stock})
          })
          .then(res=>res.json())
          .then(data=>{
                navigate(`/items/${state.item._id}`)
          })

      }
      return (
            <div className='lg:w-50 mx-auto p-6 m-10 border-4'>
                  <h3 className='text-center text-4xl font-thin'>Delivered to Agent</h3>
                        <div className='text-center m-2 p-2'>
                              <p>ItemID : {state.item._id}</p>
                              <p>Category:{state.item.category}</p>
                              <p>Current Stock:{state.item.stock}</p>
                              <form onSubmit={handleUpdateStock}>
                              <input onChange={(e)=>setStock(e.target.value)} className='border-4 mr-3' type="number" name="number" id="number" />
                             <input  className='border-2 bg-blue-500 text-white p-2 rounded-md mt-4' type="submit" value="Update Stock" />
                              </form>
                        </div> 
            </div>
      );
};

export default Agents;