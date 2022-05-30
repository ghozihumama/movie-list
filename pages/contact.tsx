import { FC } from "react";
import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 1rem;
  font-weight: 500;
`;

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>LinkedIn: https://www.linkedin.com/in/maulanaghozi/</Heading>
      </Hero>
    </>
  );
};

export default Contact;
