import axios from 'axios';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import useFirebase from '../hooks/UseFirebase';

export default function Home({posts}) {
  const {user} = useFirebase()
  console.log(posts);
  const latestPosts = posts.reverse()
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
        
        <Feed posts={latestPosts}></Feed>
        
        
        <Widgets />
      </main>

      </div> : <Login />}
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await axios.get(`http://localhost:3000/api/post/`);
  
  return {
    props: {
      posts: posts.data,
     
    },
    revalidate: 10
  };
};
