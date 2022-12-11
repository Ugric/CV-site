import type { NextPage } from "next";
import wave from "./images/wave.png";
import me from "./images/skiing.jpg";
import styles from "../styles/Home.module.css";
import Timeline from "./components/timeline-points";
import "font-awesome/css/font-awesome.min.css";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import logrocketid from "./logrocket.json";
import Snowflakes from "./components/christmas";
import useIsChistmas from "./components/useischristmas";

if (typeof window !== "undefined") {
    LogRocket.init(logrocketid);
    setupLogRocketReact(LogRocket);
}

const Home: NextPage = () => {
    const width = 250;
    const isChristmas = useIsChistmas();
    return (
        <>
            {isChristmas ? <Snowflakes amount={31} /> : null}
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
                        , I&apos;m Will.
                    </h1>
                    <h2>I&apos;m passionate about developing software.</h2>
                </div>
                <div>
                    <img
                        className={styles.my_image}
                        src={me.src}
                        width={width}
                        height={864 * (width / 640)}
                        alt="Me"
                    ></img>
                    <div className={styles.bottom_Icons}>
                        <a
                            className={`${styles.icons} fa fa-github`}
                            href="https://github.com/Ugric"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></a>
                        <a
                            className={`${styles.icons} fa fa-coffee`}
                            href="https://www.buymeacoffee.com/WillB"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></a>
                        <a
                            className={`${styles.icons} fa fa-youtube`}
                            href="https://www.youtube.com/@Ugric"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></a>
                    </div>
                    <div className={styles.emailtext}>
                        Get in touch through my email at{" "}
                        <a
                            href="mailto:hi@wbell.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.email}
                        >
                            hi@wbell.dev
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.fade_container}>
                <div className={styles.info}>
                    <div className={styles.boxed}>
                        <h1>Some of the projects I&apos;ve been working on</h1>
                        <Timeline
                            Timeline={[
                                <>
                                    <h1>UK Home Cinemas Shop (not released)</h1>
                                    <p>
                                        In summer 2022, I started working with
                                        my dad to create an online shopping
                                        website for selling home cinema
                                        equipment. (
                                        <a
                                            href="https://ukhomecinemas.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            UK home Cinemas website
                                        </a>
                                        )
                                    </p>
                                    <p className={styles.source}>
                                        Closed Source
                                    </p>
                                </>,
                                <>
                                    <h1>Argon V2</h1>
                                    <p>
                                        I started reprogrammed Argon in GO to
                                        improve speed.
                                    </p>
                                    <a
                                        href="https://github.com/Open-Argon/Argon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.source}
                                    >
                                        Source
                                    </a>
                                </>,
                                <>
                                    <h1>
                                        <a
                                            href="https://typechat.world/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TypeChat (closed)
                                        </a>
                                    </h1>
                                    <p>
                                        I&apos;ve created and worked on TypeChat
                                        between 17 Jun 2021 - Feb 2022. It is a
                                        react web application that allows you to
                                        chat and send files.
                                    </p>
                                    <a
                                        href="https://github.com/Ugric/typechat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.source}
                                    >
                                        Source
                                    </a>
                                </>,
                                <>
                                    <h1>Argon Programming Language</h1>
                                    <p>
                                        I created the Argon Programming
                                        Language. I chose design a high level
                                        programming language to teach myself
                                        REGEX.
                                    </p>
                                    <a
                                        href="https://github.com/Ugric/argon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.source}
                                    >
                                        Source
                                    </a>
                                </>,
                                <>
                                    <h1>Blast AI framework</h1>
                                    <p>
                                        Blast AI was a project I created after
                                        learning the basics on how AI works from
                                        a{" "}
                                        <a
                                            href="https://youtu.be/R9OHn5ZF4Uo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            youtube video
                                        </a>
                                        .
                                    </p>
                                    <a
                                        href="https://github.com/Ugric/blast"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.source}
                                    >
                                        Source
                                    </a>
                                </>,
                                <>
                                    <h1>Started Web Development</h1>
                                    <p>
                                        Started web development in September
                                        2019, and have been improving ever
                                        since.
                                    </p>
                                </>,
                            ]}
                        ></Timeline>
                    </div>
                </div>
                {isChristmas ? (
                    <>
                        <p className={styles.christmas_message}>
                            Merry Christmas 🎅
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            className={styles.snow_pile}
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="#f3f4f5"
                                fillOpacity="1"
                                d="M0,256L34.3,224C68.6,192,137,128,206,122.7C274.3,117,343,171,411,170.7C480,171,549,117,617,85.3C685.7,53,754,43,823,85.3C891.4,128,960,224,1029,234.7C1097.1,245,1166,171,1234,133.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                            ></path>
                        </svg>
                    </>
                ) : null}
            </div>
        </>
    );
};

export default Home;
