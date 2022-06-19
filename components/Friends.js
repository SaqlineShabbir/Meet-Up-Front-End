import React from 'react';
import FriendFeed from './FriendFeed';
import Header from './Header';
import SidebarFriends from './SidebarFriends';

const Friends = () => {
    return (
        <div>
           <div>
            <Header></Header>
           </div>
           <main className="flex">
        <SidebarFriends />
        <FriendFeed></FriendFeed>
      </main>
        </div>
    );
};

export default Friends;