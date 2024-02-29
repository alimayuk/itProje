import React from "react";
import styles from "./blogs.module.css";
import BlueTitle from "../blueTitle/BlueTitle";
import Image from "next/image";
import Link from "next/link";
import { PiUser } from "react-icons/pi";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.container}>
        <BlueTitle
          subTitle={"BLOG & NEWS"}
          bigTitle={"Explore Blogs And News"}
        />
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Link href="/">
              <Image src="/p2.webp" alt="a" fill />
              </Link>
            </div>
            <div className={styles.body}>
              <div className={styles.userInfo}>
                  <div className={styles.icon}><PiUser /> By Admin</div>
              </div>
              <Link href="" className={styles.title}>
                Necessity May Give us Best Virtual Court
              </Link>
              <Link href="/" className={styles.moreBtn}>
                Read More
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <Link href="/">
              <Image src="/p2.webp" alt="a" fill />
              </Link>
            </div>
            <div className={styles.body}>
              <div className={styles.userInfo}>
                  <div className={styles.icon}><PiUser /> By Admin</div>
              </div>
              <Link href="" className={styles.title}>
                Necessity May Give us Best Virtual Court
              </Link>
              <Link href="/" className={styles.moreBtn}>
                Read More
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <Link href="/">
              <Image src="/p2.webp" alt="a" fill />
              </Link>
            </div>
            <div className={styles.body}>
              <div className={styles.userInfo}>
                  <div className={styles.icon}><PiUser /> By Admin</div>
              </div>
              <Link href="" className={styles.title}>
                Necessity May Give us Best Virtual Court
              </Link>
              <Link href="/" className={styles.moreBtn}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
