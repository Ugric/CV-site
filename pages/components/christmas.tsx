import { useState } from "react";
import styles from "../../styles/christmas.module.css";

function Snowflake() {
    const [left] = useState(Math.random() * 100 + "%");
    const [animationDelay] = useState(
        `${Math.random() * 10}s, ${Math.random() * 10}s`
    );
    const snowflaketext = [
        "❅",
        "❆",
        "❄",
        "❅",
        "❆",
        "❄",
        "❅",
        "❆",
        "❄",
        "❅",
        "❆",
        "❄",
        "❅",
    ];
    const [snowflake] = useState(
        snowflaketext[Math.floor(Math.random() * snowflaketext.length)]
    );
    const [animationDuration] = useState(`${Math.random() * 5 + 4}s`);
    const [fontSize] = useState(`${Math.random() * 15 + 20}px`);
    return (
        <div
            className={styles.snowflake}
            style={{
                left,
                animationDelay,
                animationDuration,
                fontSize,
            }}
        >
            {snowflake}
        </div>
    );
}

function Snowflakes({ amount }: { amount?: number }) {
    return (
        <div className={styles.snowflakes}>
            {new Array(amount ? amount : 10).fill(1).map((_, i) => (
                <Snowflake key={i} />
            ))}
        </div>
    );
}

export default Snowflakes;
