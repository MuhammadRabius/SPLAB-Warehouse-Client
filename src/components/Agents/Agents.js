
import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAllItem from './../CustomHooks/useAllItem';

const Agents = () => {
      const [user]=useAuthState(auth);
      const [item,setItem]=useAllItem()
      const navigate=useNavigate();
      const { register, handleSubmit } = useForm();
      const onSubmit = (data,itemId) => {
            const url = `https://sleepy-thicket-75359.herokuapp.com/items/${itemId}`;
            const newStockItem ={

                  stock: data.stock-1,  
            };
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStockItem)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        }, )
        alert('Successfully Delivered')
       navigate('/manageproducts')
      };
      return (
           <div className='mx-auto m-4 p-2 gap-3 w-50'>
                  <div className='w-full lg:w-50 mx-auto p-6 mt-10 border-4'>
                        <h3 className='text-center text-4xl font-thin'>Delivery Form</h3>
                   <form className='  flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(()=>onSubmit(user._id))}>
                        <input className='border-2 p-2' type="date" name="date" id="date" {...register("date")}  />
                        <input type="email" name="email" value={user.email} id="email" className='border-2 p-2'  readOnly/>
                        
                        <input type="text" name="name" value={user.displayName} id="name" className='border-2 p-2'  readOnly/>
                        <input className='border-2 p-2' type="number" {...register("stock")}  placeholder='Order Pcs'/>
                        <input className='border-2 p-2' type="text" {...register("agent")}  placeholder='Mention Agent Name'/>
                        
                        <input className=' p-2 bg-blue-500 text-white' type="submit" value='Delivered' />
                  </form> 
                  </div>

                  
            </div>
      );
};

export default Agents;