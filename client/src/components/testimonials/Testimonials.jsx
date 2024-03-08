"use client";
import React from "react";
import styles from "./testimonials.module.css";
import BlueTitle from "../blueTitle/BlueTitle";
import Slider from "react-slick";
import Image from "next/image";

const Testimonials = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  return (
    <div className={`${styles.testimonials} test`} id="testimonials">
      <div className={styles.container}>
        <BlueTitle
          subTitle={"Testimonials"}
          bigTitle={"What They Say About Our"}
          white={false}
        />

        <Slider {...settings}>
          {data.map((item)=>(
            <div className={styles.item} key={item.id}>
            <div className={styles.top}>
              <div className={styles.image}>
                <Image src={`${process.env.API_BASE_URLL}/storage/images/${item.image}`} fill alt="a" />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.job}>{item.job}</div>
                <div className={styles.rating}>{item.rating}/5</div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.desc}>
              {item.comment}
              </div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
