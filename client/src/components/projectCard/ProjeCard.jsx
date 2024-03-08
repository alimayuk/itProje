import React from 'react'
import styles from "./card.module.css"
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
const ProjeCard = ({imgUrl,linkUrl,subTitle,title}) => {
  return (
    <div className={styles.slickItem}>
    <div className={styles.image}>
      <Image src={imgUrl ? `${process.env.API_BASE_URLL}/storage/images/${imgUrl}` : "/p1.webp"} fill alt="a" />
    </div>
    <div className={styles.itemLink}>
      <Link href={`/case/${linkUrl}`}><FaArrowRight /></Link>
    </div>
    <div className={styles.content}>
      <div className={styles.contenttitle}>
        {subTitle}
      </div>
      <div className={styles.description}>
     <h3>{title}</h3>
      </div>
    </div>
  </div>
  )
}

export default ProjeCard