import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import logo from '../assets/logos/Facebook-logo.png';
import HeaderIcon from './HeaderIcon';
function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg-px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image src={logo} width={70} height={50} layout="fixed" />
        <div className="flex ml-2 rounded-full items-center  bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Meet Up"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
    </div>
  );
}
export default Header;
// import { BeakerIcon, BellIcon,ChatIcon,ChevronDoubleDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon, } from '@heroicons/react/solid'
// import {FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon} from "@heroicons/react/outline"
