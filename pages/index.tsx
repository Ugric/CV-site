import type { NextPage } from "next";
import wave from "./images/wave.png";
import me from "./images/skiing.jpg";
import styles from "../styles/Home.module.css";
import Timeline from "./components/timeline-points";

const Home: NextPage = () => {
  const width = 250;
  return (
    <>
      <div className={styles.top_container}>
        <div>
          <h1 className={styles.introduction}>
            Hey{" "}
            <img
              src={wave.src}
              width="50px"
              height="50px"
              alt="👋"
              className={styles.wave}
            ></img>
            , I'm Will.
          </h1>
          <h2>I'm passionate about developing software.</h2>
        </div>
        <div>
          <img
            className={styles.my_image}
            src={me.src}
            width={width}
            height={864 * (width / 640)}
            alt="Me"
          ></img>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.boxed}>
          <h1>Some of the projects I've been working on</h1>
          <Timeline
            Timeline={[
              <>
                <h1>
                  <a href="https://typechat.world/" target="_blank">
                    TypeChat
                  </a>
                </h1>
                <p>
                  I created and worked on TypeChat from 17 Jun 2021 - Present.
                  It is a react web application that allows you to chat and send
                  files.
                </p>
                <a
                  href="https://github.com/Ugric/typechat"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
              </>,
              <>
                <h1>Argon Programming Language</h1>
                <p>
                  I created the Argon Programming Language. I chose design a
                  high level programming language to teach myself REGEX.
                </p>
                <a
                  href="https://github.com/Ugric/argon"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
              </>,
              <>
                <h1>Blast AI framework</h1>
                <p>
                  Blast AI was a project I created after learning the basics on
                  how AI works from a{" "}
                  <a href="https://youtu.be/R9OHn5ZF4Uo" target="_blank">
                    youtube video
                  </a>
                  .
                </p>
                <a
                  href="https://github.com/Ugric/blast"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
              </>,
              <>
                <h1>Started Web Development</h1>
                <p>
                  Started web development in September 2019, and have been
                  improving ever since.
                </p>
              </>,
            ]}
          ></Timeline>
        </div>
      </div>
    </>
  );
};

export default Home;
