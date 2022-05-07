import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const MyItem = () => {
      const [user]=useAuthState(auth);
      const [items,setItem]=useState([]);

      useEffect(()=>{
      
            const getItem=async()=>{

              const email=user.email;

              const url =`http://localhost:5000/itemsbyemail?email=${email}`;
            
              const {data}=await axios.get(url);
                console.log(data);
              
              setItem(data)
        }

        getItem();
            
      },[user])
      return (
            <div>
                <h1>Add New Item:{items.length}</h1>  
            </div>
      );
};

export default MyItem;