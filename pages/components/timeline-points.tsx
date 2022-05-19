import { NextPage } from "next";
import { ReactNode } from "react";
import styles from "/styles/timeline.module.css";

const Timeline = (props: { Timeline: ReactNode[]; [key: string]: any }) => {
  return (
    <div
      {...(() => {
        const copy: Record<string, any> = Object.assign({}, props);
        delete copy.Timeline;
        return copy;
      })()}
      className={styles.Timeline}
    >
      {props.Timeline?.map((value, index) => (
        <TimelinePoint
          text={value}
          key={index}
          delay={0.25 * index + 1}
        ></TimelinePoint>
      ))}
    </div>
  );
};

const TimelinePoint = ({ text, delay }: { text: ReactNode; delay: number }) => {
  return (
    <div className={styles.point}>
      <div className={styles.line}></div>
      <div
        className={styles.circle}
        style={{ animationDelay: delay + "s" }}
      ></div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
export default Timeline;
