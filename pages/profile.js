import Image from 'next/image';
import cover from '../assets/images/Cap.PNG';
import Header from '../components/Header';
import useFirebase from '../hooks/UseFirebase';
const profile = () => {
  const { user } = useFirebase();
  return (
    <div>
      <Header></Header>
      <div className="lg:mx-40 md:mx-20 ">
        <Image alt="image" src={cover} width={1400} height={500} className="" />
        <div className="lg:flex justify-between">
          <div className="flex ml-10 ">
            <img
              className="w-40 h-40 border-8 border-white  rounded-full relative bottom-10"
              src={user.photoURL}
              alt=""
            />
            <h3 className="font-bold text-3xl ml-5 mt-4">{user.displayName}</h3>
            {/* friends */}
          </div>
          <div className="lg:mt-10 ms-30 lg:ms-0">
            <button className="bg-sky-400 rounded px-3 py-1 mx-2">
              Add to Story
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded">
              Edit profile
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default profile;
