import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className='bg-[#0A192F]'>
      <Head>
        <title>John K Thiongo portfolio</title>
        <meta
          name='description'
          content='Projects by Kenyan software developer John k Thiongo'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* {the navbar} */}
      <Navbar />

      {/* intro */}
      <Intro />

      {/* about */}
      <About />
    </main>
  );
}
