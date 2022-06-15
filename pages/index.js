import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import useFirebase from '../hooks/UseFirebase';

export default function Home() {
  const {user} = useFirebase()
  return (
    <div className="h-screen  bg-gray-100 overflow-hidden">
      {user.email? <div>
        <Head>
        <title>Meet Up</title>
        {/* // hello  */}
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        {/* newsFeed */}
        <Feed></Feed>
        <Widgets />
      </main>

      </div> : <Login />}
    </div>
  );
}
