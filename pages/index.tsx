import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Quote from "@/components/Quote";
import LexicaImage from "@/components/LexicaImage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Quote />
    </>
  );
}
