import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HomePage from "./HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <main className="">
        <HomePage />
      </main>
=======
         <main className="">
        <HomePage/>
          </main>
>>>>>>> c4ea54276bcc62c1456849087abd773573b735f9
    </div>
  );
}
