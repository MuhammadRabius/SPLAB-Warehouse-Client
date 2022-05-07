
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import useItemCategory from '../CustomHooks/useItemCategory';
import { useEffect } from 'react';


const AddItem = () => {
      const { state } = useLocation();
      console.log(state)
      const [stock,setStock]=useState();
      const [user]=useAuthState(auth);
      const navigate=useNavigate();
      const { register, handleSubmit } = useForm();
      const onSubmit = (data) => {
            const url = `https://sleepy-thicket-75359.herokuapp.com/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        }, )
        alert('Successfully Added')
       navigate('/manageproducts')
      };

      // update--Stock--------------------

      const handleUpdateStock=(e)=>{
          e.preventDefault();
          console.log(state.item._id)
          fetch(`http://localhost:5000/items/${state.item._id}`
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
            <div className='lg:flex justify-center items-center m-4 p-2 gap-3'>
                  <div className='w-full lg:w-50 mx-auto p-6 mt-10 border-4'>
                        <h3 className='text-center text-4xl font-thin'>Create New Item</h3>
                   <form className='  flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                        <input className='border-2 p-2' type="date" name="date" id="date" {...register("date")}  />
                        <input type="email" name="email" value={user.email} id="email" className='border-2 p-2' {...register("email")} readOnly/>
                        <input type="text" name="name" value={user.displayName} id="name" className='border-2 p-2' {...register("name")} readOnly/>
                        <input className='border-2 p-2' {...register("category")} placeholder='Please Enter Category Name' />
                        <input className='border-2 p-2' {...register("img")} placeholder='Category Photo URL' />
                        <textarea className='border-2 p-2' {...register("description")}  placeholder='Write Medicine Description' />
                        <input className='border-2 p-2' type="number" {...register("stock")}  placeholder='Stock'/>
                        <input className='border-2 p-2' type="number" {...register("price")}  placeholder='Per Unit Price'/>
                        <input type="text" name="seller" id="seller" className='border-2 p-2' {...register("seller")} placeholder='Supplier'/>
                        <input className=' p-2 bg-blue-500 text-white' type="submit" value='Add Item' />
                  </form> 
                  </div>

                  <div className='mt-10 w-full lg:w-50 mx-auto my-10 p-6 mt-10 border-4'>
                         <h3 className='text-center text-4xl font-thin'>Update Item Stock</h3>
                        <div className='text-center m-2 p-2'>
                              <p>ItemID : {state.item._id}</p>
                              <p>Category:{state.item.category}</p>
                              <p>Category:{state.item.stock}</p>
                              <form onSubmit={handleUpdateStock}>
                              <input onChange={(e)=>setStock(e.target.value)} className='border-4 mr-3' type="number" name="number" id="number" />
                             <input  className='border-2 bg-blue-500 text-white p-2 rounded-md' type="submit" value="Update Stock" />
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default AddItem;