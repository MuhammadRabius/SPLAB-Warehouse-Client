import React from 'react';
import { HiMail,HiPhoneOutgoing,HiLocationMarker } from "react-icons/hi";

const TopBanner = () => {
      return (
            <div>
                  <div className='lg:flex lg:justify-center items-center md:gp-11 lg:gap-11  p-2 bg-indigo-500'>
                  <p className='< text-white flex items-center'> <HiMail className='lg:mx-2 lg:text-2xl'/>support.hakimtayen.splab@gmail.com </p>
                  <p className=' text-white flex items-center gap-2'> <HiPhoneOutgoing className='mx-2 text-2xl'/>Emergency Line: +88 01999-999999</p>
                  <p className=' text-white flex items-center '> <HiLocationMarker className='mx-2 text-2xl'/> Location: BSSIC Shilpa Nogory Chandpur </p>
            </div>
            </div>
      );
};

export default TopBanner;