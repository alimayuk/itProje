"use client"
import React from "react";
import styles from "./project.module.css";
import Slider from "react-slick";
import Image from "next/image";
import BlueTitle from "../blueTitle/BlueTitle";
import ProjeCard from "../projectCard/ProjeCard";
const Project = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`${styles.project} project`}>
      <Image
        className={styles.serviceleft}
        src="/serviceleft.png"
        width={400}
        height={400}
        alt="a"
      />
      <Image
        className={styles.serviceright}
        src="/serviceright.png"
        width={400}
        height={400}
        alt="a"
      />
      <div className={styles.container}>
        <BlueTitle
          bigTitle={"FROM OUR CASE STUDIES"}
          subTitle={"Latest Project Are Here"}
        />

        <div className={styles.slickWrapper}>
          <Slider {...settings}>
            <ProjeCard
              imgUrl={"/p1.webp"}
              linkUrl={""}
              subTitle={"Security"}
              title={"Web Development"}
            />
            <ProjeCard
              imgUrl={"/p3.jpeg"}
              linkUrl={""}
              subTitle={"Solution"}
              title={"IT Management"}
            />
            <ProjeCard
              imgUrl={"/p2.webp"}
              linkUrl={""}
              subTitle={"Security"}
              title={"Network Security"}
            />
            <ProjeCard
              imgUrl={"/p5.jpeg"}
              linkUrl={""}
              subTitle={"Solution"}
              title={"Web Development"}
            />
            <ProjeCard
              imgUrl={"/p1.webp"}
              linkUrl={""}
              subTitle={"Technology"}
              title={"Platform Integration"}
            />
            <ProjeCard
              imgUrl={"/p4.webp"}
              linkUrl={""}
              subTitle={"Security"}
              title={"Network Security"}
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
