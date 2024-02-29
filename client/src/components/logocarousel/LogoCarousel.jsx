"use client"
import React, { useEffect } from "react";
import styles from "./logo.module.css";
import Image from "next/image";

const LogoCarousel = () => {
    useEffect(() => {
        const copy = document.querySelector(`.${styles.logosSlide}`).cloneNode(true);
        document.querySelector(`.${styles.logos}`).appendChild(copy);

    }, []);
    
    return (
        <div className={styles.logos}>
            <div className={styles.logosSlide}>
                <Image width={50} height={50} alt="a" src="/3m.svg" />
                <Image width={50} height={50} alt="a" src="/barstool-store.svg" />
                <Image width={50} height={50} alt="a" src="/budweiser.svg" />
                <Image width={50} height={50} alt="a" src="/buzzfeed.svg" />
                <Image width={50} height={50} alt="a" src="/forbes.svg" />
                <Image width={50} height={50} alt="a" src="/menshealth.svg" />
                <Image width={50} height={50} alt="a" src="/mrbeast.svg" />
            </div>

            <div className={styles.logosSlide}>
                <Image width={50} height={50} alt="a" src="/3m.svg" />
                <Image width={50} height={50} alt="a" src="/barstool-store.svg" />
                <Image width={50} height={50} alt="a" src="/budweiser.svg" />
                <Image width={50} height={50} alt="a" src="/buzzfeed.svg" />
                <Image width={50} height={50} alt="a" src="/forbes.svg" />
                <Image width={50} height={50} alt="a" src="/menshealth.svg" />
                <Image width={50} height={50} alt="a" src="/mrbeast.svg" />
            </div>
        </div>
    );
};

export default LogoCarousel;
