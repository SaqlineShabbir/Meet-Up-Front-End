import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

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
<<<<<<< HEAD
        <Feed></Feed>
=======
        <Widgets />
>>>>>>> f332012ede390f3cd9786bdcdb67889c4361135b
      </main>
    </div>
  );
}
