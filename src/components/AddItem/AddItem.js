import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddItem = () => {
      const { register, handleSubmit } = useForm();
      const onSubmit = data => {
            const url = `http://localhost:5000/items`;
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
        } )
        
      };
      return (
            <div className='lg:flex justify-center items-center m-4 p-2 gap-3'>
                  <div className='w-full lg:w-50 mx-auto p-6 mt-10 border-4'>
                        <h3 className='text-center text-4xl font-thin'>Add New Item</h3>
                   <form className='  flex flex-col  gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
                        <input className='border-2 p-2' {...register("category")} placeholder='Please Enter Category Name' />
                        <input className='border-2 p-2' {...register("img")} placeholder='Category Photo URL' />
                        <textarea className='border-2 p-2' {...register("description")} placeholder='Write Medicine Description' />
                        <input className='border-2 p-2' type="number" {...register("stock")} placeholder='Stock'/>
                        <input className='border-2 p-2' type="number" {...register("price")} placeholder='Per Unit Price'/>
                         <input className='border-2 p-2' {...register("seller")} placeholder='Mention Seller Name' />
                        <input className=' p-2 bg-blue-500 text-white' type="submit" value='Add Item' />
                  </form> 
                  </div>

                  <div className='mt-10 w-full lg:w-50 mx-auto my-10 p-6 mt-10 border-4'>
                         <h3 className='text-center text-4xl font-thin'>Update Item Stock</h3>
                  </div>
            </div>
      );
};

export default AddItem;