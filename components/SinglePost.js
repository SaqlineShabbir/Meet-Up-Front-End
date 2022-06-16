import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {AiOutlineLike} from 'react-icons/ai'
import {GoComment} from 'react-icons/go';
import {RiShareForwardLine} from 'react-icons/ri'
const SinglePost = ({ post }) => {
  const { name, image, postImage, date } = post;
  return (
    <div className="z-50 my-3 shadow-md bg-white rounded-lg  top-0 bottom-0 ">
      <div className="flex p-5 items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-full " src={image} alt="" />
          <div>
            <h1>{name}</h1>
          </div>
        </div>
        <BsThreeDots />
      </div>
      <img src={postImage} className="block w-full" alt="" />
      <hr />
      <div className="flex justify-around p-2">
        <div className="flex items-center cursor-pointer py-2 px-12 gap-1 rounded-lg text-xl hover:bg-gray-200">
            <AiOutlineLike />
            <h2>Like</h2>
        </div>
        <div className="flex items-center cursor-pointer py-2 px-12 gap-1 rounded-lg text-xl hover:bg-gray-200">
            <GoComment />
            <h2>Comment</h2>
        </div>
        <div className="flex items-center cursor-pointer py-2 px-12 gap-1 rounded-lg text-xl hover:bg-gray-200">
            <RiShareForwardLine />
            <h2>Share</h2>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
