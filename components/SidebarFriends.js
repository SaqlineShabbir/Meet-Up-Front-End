import {
  CakeIcon,
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

import Link from 'next/link';

const SidebarFriends = () => {
  return (
    <div>
      <div className="sticky top-0 w-fu p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        <Link href="/">
          <div>
            <SidebarRow Icon={HomeIcon} title="Home" />
          </div>
        </Link>
        <SidebarRow Icon={UsersIcon} title="Friend request" />
        <SidebarRow Icon={UsersIcon} title="suggestions" />
        <SidebarRow Icon={UserGroupIcon} title="All friends" />
        <SidebarRow Icon={CakeIcon} title="Birthdays" />
        {/* //side bar  */}
      </div>
    </div>
  );
};

export default SidebarFriends;
