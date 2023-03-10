import Head from 'next/head'
import Image from 'next/image'

import { Box } from '../components/box';
import Header from '../components/header.jsx';
import Sidebar from '../components/sidebar';
import Content from '../components/content.jsx';
// import { Footer } from '../components/footer';

export default function Home() {
  const sidebarItems = [
    {
      id: 1,
      title: "item 1",
      icon: "",
      link: "/",
    },
    {
      id: 2,
      title: "item 2",
      icon: "",
      link: "/",
    },
  ];
  const headerItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Search",
    },
    {
      id: 3,
      title: "About",
    }
  ]
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header items={headerItems} />
          <Sidebar items={sidebarItems} />
          <Content />
          {/* <Footer /> */}
        </div>
      </main>
    </>
  )
}