import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { async } from '@firebase/util';

const MyItem = () => {
      const [user]=useAuthState(auth);
      const [items,setItem]=useState([]);

      useEffect(()=>{
      
            const getItem=async()=>{

              const email=user.email;

              const url =`https://sleepy-thicket-75359.herokuapp.com/items?email=${email}`;
              const {data}=await axios.get(url);
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