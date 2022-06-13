import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen  bg-gray-100 overflow-hidden">
      <Head>
        <title>Meet Up</title>
       {/* // hello  */}
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        {/* newsFeed */}
        <Feed></Feed>
      </main>
    </div>
  );
}
