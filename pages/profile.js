import Image from 'next/image';
import cover from '../assets/images/Cap.PNG';
import Header from '../components/Header';
import useFirebase from '../hooks/UseFirebase';

const Profile = () => {
  const { user } = useFirebase();
  return (
    <div>
      <Header></Header>
      <div className="lg:mx-40 mx-0 md:mx-20 ">
        <Image alt="image" src={cover} width={1400} height={500} className="" />
        <div className="lg:flex lg:justify-between lg:mx-0 mx-auto ">
          <div className="lg:flex">
            <img
              className="w-40 h-40 border-8 border-white  rounded-full relative bottom-10"
              src={user.photoURL}
              alt=""
            />
            <h3 className="font-bold text-3xl ml-5 mt-4 relative  bottom-14 lg:bottom-0">
              {user.displayName}
            </h3>
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
        <div className="flex justify-between py-3 mx-3 lg:mx-0">
          <div className="flex space-x-5 lg:mx-16 mx-5">
            <button>Posts</button>
            <button>About</button>
            <button>Friends</button>
            <button>Photos</button>
            <button>Check-ins</button>
            <button>More</button>
          </div>
          <button className="bg-gray-200 px-3 rounded">...</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
