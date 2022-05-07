import React, { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
import { toast } from 'react-hot-toast';

const Login = () => {
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [error,setError]=useState('');
      const location=useLocation();
      const navigate =useNavigate();
      const [signInWithEmailAndPassword,
                  user] = useSignInWithEmailAndPassword(auth);
   
      const [sendPasswordResetEmail] = 
                  useSendPasswordResetEmail(auth);


      const handleEmail =event=>{
            
            setEmail(event.target.value);
           
      }
      const handPassword =(event)=>{
            
            setPassword(event.target.value);
           
      }
      const from = location.state?.from?.pathname ||'/';
      const handleSubmit=(event)=>{
           event.preventDefault();
           if(user){
            signInWithEmailAndPassword(email,password);
             navigate(from,{replace:true});
           } 
           else{
            setError('Invalid email or password');
            return 
           }
           
      }
      return (
           <div className='login-container'>
                  <h1 className='text-end mr-40 font-thin p-6 text-white'>Please login</h1>


                  <div className='flex justify-end p-10 font-thin text-white '>
                  
                   <Form onSubmit={handleSubmit} className='border-2 rounded-md p-4 text-2xl'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='p-3' onBlur={handleEmail} type="email" placeholder="Enter your email" required />
                        <Form.Text className="text-white">
                              We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='p-3' onBlur={handPassword} type="password" placeholder="Password" required/>
                        </Form.Group>
                        
                        <p className='flex items-center text-1xl'>Create New Account?<Nav.Link as={Link} to='/register'>Register Now</Nav.Link></p>
                        <p className='flex items-center text-1xl'>Forgot Password<Nav.Link onClick={
                              async()=>{await sendPasswordResetEmail(email)
                               alert('Password Sent')} } >Reset Password</Nav.Link></p>
                        <p>{error}</p>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                        <SocialLogin></SocialLogin>
                  </Form>
                  
            </div>
            
            
           </div>
      );
};

export default Login;