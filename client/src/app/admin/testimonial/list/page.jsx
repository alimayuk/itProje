import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Testimonial List</h2>

        <div className={styles.lists}>
          <div className={styles.item}>
            <div className={styles.first}>
              <Image src="/a.jpg" width={50} height={50} />
              <div>
                <div>Ali</div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className={styles.second}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero ipsam ut repellendus a eligendi similique suscipit
              dignissimos.
            </div>
            <div className={styles.third}>
              <div className={styles.statusBtn}>Status</div>
              <div className={styles.ratingBtn}> 3/5</div>
            </div>
            <div className={styles.third}>
              <div className={styles.editBtn}>Edit</div>
              <div className={styles.deleteBtn}>Delete</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.first}>
              <Image src="/a.jpg" width={50} height={50} />
              <div>
                <div>Ali</div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className={styles.second}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero ipsam ut repellendus a eligendi similique suscipit
              dignissimos.
            </div>
            <div className={styles.third}>
              <div className={styles.statusBtn}>Status</div>
              <div className={styles.ratingBtn}> 3/5</div>
            </div>
            <div className={styles.third}>
              <div className={styles.editBtn}>Edit</div>
              <div className={styles.deleteBtn}>Delete</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.first}>
              <Image src="/a.jpg" width={50} height={50} />
              <div>
                <div>Ali</div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className={styles.second}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero ipsam ut repellendus a eligendi similique suscipit
              dignissimos.
            </div>
            <div className={styles.third}>
              <div className={styles.statusBtn}>Status</div>
              <div className={styles.ratingBtn}> 3/5</div>
            </div>
            <div className={styles.third}>
              <div className={styles.editBtn}>Edit</div>
              <div className={styles.deleteBtn}>Delete</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.first}>
              <Image src="/a.jpg" width={50} height={50} />
              <div>
                <div>Ali</div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className={styles.second}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero ipsam ut repellendus a eligendi similique suscipit
              dignissimos.
            </div>
            <div className={styles.third}>
              <div className={styles.statusBtn}>Status</div>
              <div className={styles.ratingBtn}> 3/5</div>
            </div>
            <div className={styles.third}>
              <div className={styles.editBtn}>Edit</div>
              <div className={styles.deleteBtn}>Delete</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.first}>
              <Image src="/a.jpg" width={50} height={50} />
              <div>
                <div>Ali</div>
                <div>Web Developer</div>
              </div>
            </div>
            <div className={styles.second}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              libero ipsam ut repellendus a eligendi similique suscipit
              dignissimos.
            </div>
            <div className={styles.third}>
              <div className={styles.statusBtn}>Status</div>
              <div className={styles.ratingBtn}> 3/5</div>
            </div>
            <div className={styles.third}>
              <div className={styles.editBtn}>Edit</div>
              <div className={styles.deleteBtn}>Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
