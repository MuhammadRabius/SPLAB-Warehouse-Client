import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinners from '../CommonComponets/Spinners/Spinners';
import auth from './../../firebase.init';

const RequireAuth = ({children}) => {
      let [user,loading]=useAuthState(auth);
      let location=useLocation();
      
      if(loading){
            return <Spinners/>;
      };
      if(!user){
            return <Navigate to='/login' state={{from: location}} replace></Navigate>
      }
       
      return children;
};

export default RequireAuth;