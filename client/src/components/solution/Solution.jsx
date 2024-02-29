import React from "react";
import styles from "./solution.module.css";
import Image from "next/image";
import SolCard from "../solucationCard/SolCard";
import { FaCodeFork } from "react-icons/fa6";
import { TbSettingsCheck } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const Solution = () => {
  return (
    <div className="solution">
      <div className={styles.bannerThreeBg3}>
        <div className={styles.bannerImgWrapper3}>
          <Image
            className="swayAnimaionX"
            alt="a"
            src="/solution.png"
            width={262}
            height={271}
          />
        </div>
      </div>
      <div className="container">
        <div className={styles.head}>
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
            <span>FROM OUR CASE STUDIES</span>
          </div>
          <div className={styles.bottom}>We Delivered Best Solution</div>
        </div>
        <div className={styles.cards}>
          <SolCard
          imgUrl={"/it.jpg"}
          title={"Cyber Security"}
          svgUrl={<MdOutlineSecurity />}
          desc={"Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."}
           />
          <SolCard
          imgUrl={"/security.webp"}
          title={"Database Security"}
          svgUrl={<TbSettingsCheck />}
          desc={"Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."}
           />
          <SolCard
          imgUrl={"/image.jpg"}
          title={"IT Management"}
          svgUrl={<FaCodeFork />}
          desc={"Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."}
           />
        </div>
      </div>
    </div>
  );
};

export default Solution;
