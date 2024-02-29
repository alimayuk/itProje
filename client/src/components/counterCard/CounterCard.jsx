import React from 'react'
import styles from './card.module.css'
const CounterCard = ({svgUrl,count,title}) => {
  return (
    <div className={styles.item}>
            <div className={styles.iconWrapper}>
            {svgUrl}
            </div>
            <div className={styles.content}>
              <div className={styles.count}>{count}</div>
              <div className={styles.title}>{title}</div>
            </div>
          </div>
  )
}

export default CounterCard