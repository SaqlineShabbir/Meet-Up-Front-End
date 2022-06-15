import {
  CakeIcon,
    CalendarIcon,
    ChevronDoubleDownIcon,
    ClockIcon,
    DesktopComputerIcon,
    FlagIcon,
    HomeIcon,
    PlayIcon,
    SearchIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    UsersIcon,
  } from "@heroicons/react/outline";
  import SidebarRow from "./SidebarRow";

  import React from 'react';
  
  const SidebarFriends = () => {
    return (
        <div>
            <div className="sticky top-0 w-fu p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow Icon={HomeIcon} title="Home" />
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