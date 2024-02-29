import React from 'react'
import styles from "./heroinfo.module.css"
import Link from 'next/link'
const HeroInfo = ({breadTitle}) => {
  return (
    <div className={styles.heroInfo}>
        <div className={styles.wrappper}>
          <div className={styles.container}>
           <div className={styles.bread}>
           <div className={styles.breadTitle}>{breadTitle}</div>
            <div className={styles.body}>
            <Link href="/" className={styles.breadRoad}>Home</Link>
            <div className={styles.a}>{breadTitle}</div>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default HeroInfo