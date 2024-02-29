import React from "react";
import styles from "./btn.module.css";
import Link from "next/link";
const CustomBtn = ({href,text}) => {
  return (
    <Link className={styles.btnOne} href={href}>
      {text}
    </Link>
  );
};

export default CustomBtn;
