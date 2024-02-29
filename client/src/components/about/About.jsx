import React from "react";
import styles from "./about.module.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.75 16.5h-3a4.5 4.5 0 1 1 0-9h3"></path>
              <path d="M14.25 7.5h3a4.5 4.5 0 1 1 0 9h-3"></path>
              <path d="M7.654 12h8.786"></path>
            </svg>
            <span>ABOUT GRATECH</span>
          </div>
          <h2>Selecting The Finest IT Service Provider</h2>
          <p className={styles.desc}>
            It is a long established fact that a reader will be distracted the
            readable content of a page when looking at layout the point of using
            lorem the is Ipsum less normal.
          </p>
          <div className={styles.service}>
            <div className={styles.serviceItem}>
              <div className={styles.itemIcon}>
                <BsGraphUpArrow />
              </div>{" "}
              <span>
                Business <br /> Growth
              </span>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.itemIcon}>
                <MdContactPhone />
              </div>
              <span>
                Technology <br /> Consultancy
              </span>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.info}>
              <Image alt="a" width={56} height={56} src="/man.webp" />
              <div className={styles.infoDesc}>
                <div className={styles.user}>Ronald Richards</div>
                <div className={styles.userInfo}>Co, Founder</div>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.infoIcon}>
              <FaPhoneVolume />
              </div>
              <div className={styles.infoDesc}>
                <div>Call Us Now</div>
                <div>+208-555-0112</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgWrapper}>
            <Image className={styles.imgfill} alt="a" src="/about.png" fill />
            <Image className="swayAnimaionX"  alt="a" src="/faqline.png" width={64} height={64} />
        </div>
      </div>
    </div>
  );
};

export default About;
