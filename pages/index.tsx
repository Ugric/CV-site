import type { NextPage } from "next";
import wave from "./images/wave.png";
import me from "./images/skiing.jpg";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const Home: NextPage = () => {
  const width = 250;
  return (
    <>
      <div className={styles.top_container}>
        <div>
          <h1 className={styles.introduction}>
            Hey{" "}
            <Image src={wave.src} className={styles.wave} width="50px" height="50px" alt="👋"></Image>,
            I'm Will.
          </h1>
          <h2>I'm a software developer.</h2>
        </div>
        <div>
          <Image
            className={styles.my_image}
            src={me.src}
            width={width}
            height={864 * (width / 640)}
            alt="Me"
          ></Image>
        </div>
      </div>
      <div className={styles.info}>
        hello world
      </div>
    </>
  );
};

export default Home;
