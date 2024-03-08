"use client";
import React from "react";
import styles from "./project.module.css";
import Slider from "react-slick";
import Image from "next/image";
import BlueTitle from "../blueTitle/BlueTitle";
import ProjeCard from "../projectCard/ProjeCard";
const Project = ({ data }) => {
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
    <div className={`${styles.project} project`} id="case">
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
            {data.map((item) => (
              <ProjeCard
                key={item.id}
                imgUrl={item.image}
                linkUrl={item.slug}
                subTitle={item.category.title}
                title={item.title}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
