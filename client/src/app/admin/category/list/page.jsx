import React from 'react'
import styles from "./list.module.css"
const page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Category List</h2>
        <div className={styles.lists}>
          <div className={styles.item}>
            <div className={styles.title}>
              lorem lorem lorem
            </div>
            <div className={styles.middle}>
            <div className={styles.statusBtn}>
              Status
            </div>
            </div>
            <div className={styles.actionBtns}>
              <div className={styles.editBtn}>
                Edit
              </div>
              <div className={styles.deleteBtn}>
                Delete
              </div>  
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>
              lorem lorem lorem
            </div>
            <div className={styles.middle}>
            <div className={styles.statusBtn}>
              Status
            </div>
            </div>
            <div className={styles.actionBtns}>
              <div className={styles.editBtn}>
                Edit
              </div>
              <div className={styles.deleteBtn}>
                Delete
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page