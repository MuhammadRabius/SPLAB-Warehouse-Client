import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useItemCategory from './../CustomHooks/useItemCategory';


const StockHouse = () => {

      const navigate=useNavigate();
      const {itemId}=useParams();
      const [item] =useItemCategory(itemId);
      
      
      return (
            <div> 
                  <h1 className='text-center font-thin pb-3'>Update Medicine Warehouse Inventory</h1>
               <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center border-1   my-10 p-10 '>
                <div>
                      <img className='rounded-full ml-14' src={item.img} alt="" />
                </div>
                <div className=' border-2 rounded-md px-4 py-2   ml-24  '>
                      <h1 className='text-center font-thin pb-3'>Item Information</h1>
                      <p className='text-muted'>itemid:{item._id}</p>
                      <h3 className='py-2'>Medicine Category: {item.category}</h3>
                      <p>Description:{item.description}</p>
                      <h5>Price Per Unit: {item.price}</h5>
                      <h5>Stock: {item.stock}</h5>
                      <h5>Seller: {item.seller}</h5>
                      <p>Please Select Medicine 
                       <select className='p-1 ml-6 border-2 ' name="" id="">
                              <option value="sp-nishat"> SPNishat</option>
                              <option value="sp-,ishat"> SPMishat</option>
                        </select>
                      </p>
                      <div className='text-end pt-4'>
                          
                              <button  onClick={()=>navigate(`/agents`,{
                                    state: {
                                   item : item
                                                      }
                               })}  className='border-1 bg-blue-500 p-2 mr-2 rounded-lg text-white'>Deliver to Dealer</button>
                           
                            
                            <button onClick={()=>navigate(`/additem`,{
                                    state: {
                                   item : item
                                                      }
                               })} className='border-1 bg-blue-500 p-2 mr-2 rounded-lg text-white'>Add/Updated inventory</button>
                             
                      </div>
                </div>


            </div>
            </div>
      );
};

export default StockHouse;