import type { NextPage } from 'next'
import wave from './images/wave.png'
import wave from './images/me.jpeg'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.top_container}>
        <h1 className={styles.introduction}>
          Hey <Image src={wave.src} width="50px" height="50px" alt="👋"></Image>
          , I'm Will.
        </h1>
        <div>
          <Image src={wave.src} width="250px" height="250px" alt="👋"></Image>
        </div>
      </div>
    </>
  );
}

export default Home
