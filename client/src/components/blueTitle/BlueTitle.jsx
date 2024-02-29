import React from 'react'
import styles from "./blueTitle.module.css"
const BlueTitle = ({subTitle,bigTitle,white}) => {
  return (
    <div className={`${white ? styles.white : ""} ${styles.title}`}>
    <div className={styles.top}>
      <svg
        width="46"
        height="46"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.75 16.5h-3a4.5 4.5 0 1 1 0-9h3"></path>
        <path d="M14.25 7.5h3a4.5 4.5 0 1 1 0 9h-3"></path>
        <path d="M7.654 12h8.786"></path>
      </svg>
      <span>{subTitle}</span>
    </div>
    <h2>{bigTitle}</h2>
  </div>
  )
}

export default BlueTitle