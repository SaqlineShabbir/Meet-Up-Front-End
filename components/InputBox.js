import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import useFirebase from '../hooks/UseFirebase';
import PostModal from './PostModal';

const InputBox = () => {
  const { user } = useFirebase();
  const [showModal, setShowModal] = useState(false)
  const inputRef = useRef(null);
  const sendPost = (e) => {
    e.preventDefault();
 
  };
  return (
    <div>
      <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className=" flex space-x-4 p-4 items-center">
        <img src={user.photoURL} className="h-10 w-10 rounded-full" alt="" />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none "
            type="text"
            onClick={() => setShowModal(true)} 
            placeholder={`whats on your mind, ${user.displayName}`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit{' '}
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div onClick={() => setShowModal(true)}  className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base">Live video</p>
        </div>
        <div onClick={() => setShowModal(true)}  className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-sm sm:text-sm xl:text-base">Photo/video</p>
        </div>
        <div onClick={() => setShowModal(true)}  className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300"></EmojiHappyIcon>
          <p className="text-sm sm:text-sm xl:text-base">Feeling activity</p>
        </div>
      </div>
    </div>
    <PostModal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
};

export default InputBox;
