import React from 'react'
import styles from "./solcard.module.css"
import Image from "next/image";
const SolCard = ({imgUrl,svgUrl,title,desc}) => {
  return (
    <div className={styles.item}>
            <div className={styles.image}>
              <Image alt="a" src={imgUrl} fill />
            </div>
            <div className={styles.content}>
              <div >
                {svgUrl}
              </div>
              <h4>{title}</h4>
            </div>
            <div className={styles.upContent}>
              <div className={styles.itemSvg}>
                {svgUrl}
              </div>
              <div className={styles.title}>{title}</div>
              <small className={styles.desc}>{desc}</small>
              <div className={styles.moreBtn}>Read More</div>
            </div>
          </div>
  )
}

export default SolCard