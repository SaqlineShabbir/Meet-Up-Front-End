
import Image from 'next/image';
import React from 'react';

const Request = ({request}) => {
  const {name, profile,src}=request;
    return (
        <div className=' mt-10 bg-white w-64 rounded-xl  '>
      <div className=''>
      <Image
       className="p-10 "
       src={profile}
       width={250}
       height={250}
       objectFit="cover"
       alt="cover stories"
       >

       </Image>
      </div>
             <h1 className='text-start text-xl font-semibold py-5 px-5'>{name}</h1>
            <div className='text-center'>
            <button className='text-center cursor-pointer bg-blue-600 py-3 inline-block text-white w-60 font-bold rounded-md hover:bg-blue-700 mt-10'> Confirm</button> <br />
             <button  className=' mt-4 text-center cursor-pointer bg-gray-200  py-3 inline-block text-black w-60  rounded-md mb-5 hover:bg-gray-300 font-bold'> Delete</button>
            </div>
           
        </div>
    );
};

export default Request;