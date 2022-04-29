import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AiOutlineGooglePlus } from "react-icons/ai";
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
      const navigate =useNavigate();
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
            
      if (error) {
            return (
                  <div>
                  <p>Error: {error.message}</p>
                  </div>
            );}

       if(user){
             navigate('/manageproducts')
       }    
      return (
            <div>
                  <div className='flex justify-center items-center'>
                  <div style={{height:'1px'}} className='bg-secondary w-50'></div>
                  <p className='mt-2 px-2 italic'>or</p>
                  <div style={{height:'1px'}} className='bg-secondary w-50'></div>
            </div>
                <div>
                </div>
                      <button onClick={()=>signInWithGoogle()} className='border-1 rounded-xl p-2 w-full hover:bg-blue-400 flex items-center'> <AiOutlineGooglePlus className='ml-20'></AiOutlineGooglePlus> <span className='px-4 font-serif'>Google Sing In</span></button>
                      
            </div>
            
      );
};

export default SocialLogin;