import React from 'react';
import InputBox from './InputBox';

const Feed = () => {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto'>

            <div className='mx-auto mx-w-md md:max-w-lg lg:max-w-2xl'>
                {/* <Stories></Stories> */}
                <InputBox></InputBox>

            </div>
        </div>
    );
};

export default Feed;