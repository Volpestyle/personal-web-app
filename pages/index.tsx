import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PublicLayout from "../components/layouts/public.layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      <div className={styles.container}>
        <Head>
          <title>jcvolpe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.intro}>
          <h1>Hello!</h1>
          <h2>My name is James Volpe. Welcome to my portfolio.</h2>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Home;
