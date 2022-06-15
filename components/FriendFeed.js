import React from 'react';
import FriendRequests from './FriendRequests';

const FriendFeed = () => {
    return (
        <div className='h-full w-screen p-10  bg-gray-100 overflow-hidden'>
             <h1 className='text-3xl mt-10 font-bold'>Friend requests</h1>
              <FriendRequests></FriendRequests>
        </div>
    );
};

export default FriendFeed;