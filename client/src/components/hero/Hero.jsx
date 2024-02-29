import React from "react";
import styles from "./hero.module.css";
import CustomBtn from "../customBtn/CustomBtn";
import { FaRegPlayCircle } from "react-icons/fa";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
          <div className={styles.bannerThreeBg}>
           <div className={styles.bannerImgWrapper}>
           <Image className="swayAnimaionX" alt="a" src="/herobanner.png" width={650} height={850} />
           </div>
          </div>
          <div className={styles.bannerThreeBg2}>
           <div className={styles.bannerImgWrapper2}>
           <Image className="swayAnimaionY" alt="a" src="/herobanner2.png" width={1280} height={650} priority={true} />
           </div>
          </div>
          <div className={styles.bannerThreeBg3}>
           <div className={styles.bannerImgWrapper3}>
           <Image className="swayAnimaionY" alt="a" src="/herobanner3.png" width={262} height={271}/>
           </div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>
              TECHNOLOGY RELETED CONSULTANCY
            </div>
            <div className={styles.title}>
              Make The Easiest Solution For You
            </div>
            <div className={styles.paragraph}>
              Consectetur adipiscing elit Aenean scelerisque at augue vitae
              consequat quisque eget congue velit in cursus leo Sed sodales
            </div>
            <div className={styles.buttons}>
              <CustomBtn href={"/"} text={"Explore More"} />
              <div className={styles.videoWrapper}>
                <a href="https://www.youtube.com/watch?v=R6Qdmq2iTNA">
                  <FaRegPlayCircle className={styles.video} />
                </a>
                <span>How It Works</span>
              </div>
            </div>
        </div>
          <div className={styles.ImgWrapper}>
          <Image alt="a" fill src="/hero.png" sizes="33vw"/>
          </div>
      </div>
    </div>
  );
};

export default Hero;
