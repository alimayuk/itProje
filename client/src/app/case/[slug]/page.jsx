import React from 'react'
import styles from "./case.module.css"
import HeroInfo from '@/components/heroInfo/HeroInfo'

const page = () => {
  return (
    <div>
        <HeroInfo breadTitle={"Case Study Details"}/>
        <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.title}>Completed Date: </span>
            <span className={styles.answer}>23-12-2023</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Category: </span>
            <span className={styles.answer}>Technology</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Client: </span>
            <span className={styles.answer}>Robert Fox</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Location: </span>
            <span className={styles.answer}>fot kde, USA</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default page