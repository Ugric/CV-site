import type { NextPage } from 'next'
import wave from './images/wave.png'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { Controller, Effect } from "./components/controller";

const Home: NextPage = () => {
  const [myval, setval] = useState(0)
  return (
    <>
      <div className={styles.top_container}>
        <h1 className={styles.introduction}>
          Hey <Image src={wave.src} width="50px" height={"50px"} alt=""></Image>
          , I'm Will.
        </h1>
      </div>
    </>
  );
}

export default Home
