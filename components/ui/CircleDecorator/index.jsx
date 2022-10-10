import { background_color } from "styles/colors.module.scss";
import React from "react";
import styles from "./index.module.scss";

const CircleDecorator = ({colorLeft="rgb(1, 69, 255)",colorEnd="rgb(0, 198, 188)",title="Title",number=1}) => {

  return (
    <div className={styles.circleDecorator}>
      <span
        style={{
          background: `linear-gradient(${background_color}, ${colorLeft})`,
        }}
        className={styles.line}
      ></span>
      <span
        className={styles.circle}
        style={{
          background: `linear-gradient(90deg,${colorLeft}, ${colorEnd})`,
        }}
      >
        {number}
      </span>
      <h3
        className={styles.text}
        style={{
          backgroundImage: `linear-gradient(${colorLeft}, ${colorEnd})`,
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default CircleDecorator;
