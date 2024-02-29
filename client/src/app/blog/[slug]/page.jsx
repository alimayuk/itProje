import HeroInfo from "@/components/heroInfo/HeroInfo";
import React from "react";
import styles from "./detail.module.css";
import { PiUser } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineTags } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
const page = () => {
  return (
    <>
      <HeroInfo breadTitle={"Blog Detail"} />
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.item}>
            <PiUser /> <span>By Admin</span>
          </div>
          <div className={styles.item}>
          <MdOutlineDateRange /> <span>22, Nov 2023</span>
          </div>
          <div className={styles.item}>
          <AiOutlineTags /> <span>Technology</span>
          </div>
        </div>
        <div>dsadada</div>
        <div className={styles.share}>
            <div>Share: </div>
            <div className={styles.social}>
                <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </Link>
                <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default page;
