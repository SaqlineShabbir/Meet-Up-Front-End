import React from "react";
import { BsThreeDots } from "react-icons/bs";
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
    </div>
  );
};

export default SinglePost;
