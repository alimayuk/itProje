import React from 'react'
import styles from "./case.module.css"
import HeroInfo from '@/components/heroInfo/HeroInfo'
import { ClientService } from '@/services/client.service'

const page = async ({params}) => {
  const {slug} = params; 
  const data = await ClientService.getProjectData(slug); 
  return (
    <div>
        <HeroInfo breadTitle={data.project.title}/>
        <div className={styles.container}>
        <div dangerouslySetInnerHTML={{ __html: data.project.body }}></div>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.title}>Completed Date: </span>
            <span className={styles.answer}>{data.project.created_at}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Category: </span>
            <span className={styles.answer}>{data.project.category.title}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Client: </span>
            <span className={styles.answer}>{data.project.client}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.title}>Location: </span>
            <span className={styles.answer}>{data.project.location}</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default page