import React from 'react'
import styles from "./videobanner.module.css"
import Image from 'next/image'
import { CiPlay1 } from "react-icons/ci";

const Videobanner = () => {
  return (
    <div className={styles.videobanner}>
    <Image src="/videobanner.jpeg" fill alt='a'/>
    <div className={styles.btn}>
    <CiPlay1 />
    </div>
    </div>
  )
}

export default Videobanner