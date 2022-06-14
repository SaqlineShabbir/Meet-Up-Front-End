import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="h-screen  bg-gray-100 overflow-hidden">
      <Head>
        <title>Meet Up</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        {/* newsFeed */}
        <Widgets />
      </main>
    </div>
  );
}
