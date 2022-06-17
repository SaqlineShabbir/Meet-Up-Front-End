import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = ({posts}) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto mx-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox></InputBox>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
