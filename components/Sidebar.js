import {
  CalendarIcon,
  ChevronDoubleDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <Link href="/friends">
        <div>
          <SidebarRow Icon={UsersIcon} title="Friends" />
        </div>
      </Link>
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDoubleDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
