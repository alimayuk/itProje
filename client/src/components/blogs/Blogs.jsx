import React from "react";
import styles from "./blogs.module.css";
import BlueTitle from "../blueTitle/BlueTitle";
import Image from "next/image";
import Link from "next/link";
import { PiUser } from "react-icons/pi";

const Blogs = ({ data }) => {
  return (
    <div className={styles.blogs} id="blogs">
      <div className={styles.container}>
        <BlueTitle
          subTitle={"BLOG & NEWS"}
          bigTitle={"Explore Blogs And News"}
        />
        <div className={styles.cards}>
          {data.slice(0,3).map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.image}>
                <Link href={`/blog/${item.slug}`}>
                  {item.image.length > 0 ? (
                    <Image
                      src={`${process.env.API_BASE_URLL}/storage/images/${item.image[0].path_name}`}
                      alt="a"
                      fill
                    />
                  ): (<Image src="/p2.webp" alt="a" fill />)
                  }
                </Link>
              </div>
              <div className={styles.body}>
                <div className={styles.userInfo}>
                  <div className={styles.icon}>
                    <PiUser /> By Admin
                  </div>
                </div>
                <Link href={`/blog/${item.slug}`} className={styles.title}>
                  {item.title}
                </Link>
                <Link href={`/blog/${item.slug}`} className={styles.moreBtn}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
