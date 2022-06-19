import FriendFeed from './FriendFeed';
import Header from './Header';
import SidebarFriends from './SidebarFriends';

const Friend = () => {
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

export default Friend;
