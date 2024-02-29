"use client"
import React from 'react'
import styles from "./testimonials.module.css"
import BlueTitle from '../blueTitle/BlueTitle'
import Slider from "react-slick";
import Image from 'next/image';

const Testimonials = () => {
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
    <div className={`${styles.testimonials} test`}>
            <div className={styles.container}>
            <BlueTitle
            subTitle={"Testimonials"}
            bigTitle={"What They Say About Our"}
            white={false}
             />
           
           <Slider {...settings}>
           <div className={styles.item}>
                <div className={styles.top}>
                    <div className={styles.image}>
                        <Image src="/man.webp" fill alt='a' />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            Ali
                        </div>
                        <div className={styles.job}>
                            Web Designer
                        </div>
                        <div className={styles.rating}>
                            4/5
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.desc}>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quos! Sapiente sequi maiores fuga, temporibus."
                    </div>
                </div>
             </div>
             <div className={styles.item}>
                <div className={styles.top}>
                    <div className={styles.image}>
                        <Image src="/man.webp" fill alt='a' />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>
                            Ali
                        </div>
                        <div className={styles.job}>
                            Web Designer
                        </div>
                        <div className={styles.rating}>
                            4/5
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.desc}>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quos! Sapiente sequi maiores fuga, temporibus.Lorem ipsum dolor sit amet consectetur "
                    </div>
                </div>
             </div>
      </Slider>
            </div>
    </div>
  )
}

export default Testimonials