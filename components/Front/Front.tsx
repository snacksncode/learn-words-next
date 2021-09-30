import classNames from "classnames";
import React from "react";
import styles from "./Front.module.scss";

interface Props {
  data: string;
  isMobile: boolean | undefined;
}

const Front = ({ data, isMobile }: Props) => {
  const wrapperClasses = classNames(styles.wrapper, {
    [`${styles["wrapper--mobile"]}`]: isMobile,
  });
  return (
    <div className={wrapperClasses}>
      <h1 className={styles.title}>Question</h1>
      <p className={styles.text}>{data}</p>
    </div>
  );
};

export default Front;
