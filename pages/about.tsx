import { FC } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const About: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>About</h1>
    </>
  );
};

export default About;
