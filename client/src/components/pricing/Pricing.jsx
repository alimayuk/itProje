import React from "react";
import styles from "./pricing.module.css";
import { LiaBookReaderSolid } from "react-icons/lia";
import CustomBtn from "../customBtn/CustomBtn";
import Image from "next/image";
import BlueTitle from "../blueTitle/BlueTitle";

const Pricing = () => {
  return (
    <div className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <BlueTitle
        subTitle={"FROM OUR CASE STUDIES"}
        bigTitle={"Flexible Pricing Plans"}
         />
        <div className={styles.plans}>
        <div className={styles.plan}>
          <div className={styles.planTop}>
              <div className={styles.topLeft}>
                <div className={styles.planTitle}>
                  <h3>Basic Plan</h3>
                </div>
                <div className={styles.price}>
                  <span className={styles.priceItem}>$</span>
                  <span className={styles.priceItem}>29</span>
                  <span className={styles.pricelast}>/monthly</span>
                </div>
              </div>
            <div className={styles.icon}>
            <Image src="/blob.svg" fill alt="a" />
              <LiaBookReaderSolid />
            </div>
          </div>
           <div className={styles.features}>
              <ul>
                <li>Free 15 GB Linux Hosting</li>
                <li>Dedicated Tech Experts</li>
                <li>24/7 System Monitoring</li>
                <li>Security Management</li>
                <li>Unlimited Download</li>
              </ul>
            <CustomBtn
            href={"/"}
            text={"Choose Plan"}
             />
            </div>
        </div>
        <div className={styles.plan}>
          <div className={styles.planTop}>
              <div className={styles.topLeft}>
                <div className={styles.planTitle}>
                  <h3>Basic Plan</h3>
                </div>
                <div className={styles.price}>
                  <span className={styles.priceItem}>$</span>
                  <span className={styles.priceItem}>29</span>
                  <span className={styles.pricelast}>/monthly</span>
                </div>
              </div>
            <div className={styles.icon}>
            <Image src="/blob.svg" fill alt="a" />
              <LiaBookReaderSolid />
            </div>
          </div>
           <div className={styles.features}>
              <ul>
                <li>Free 15 GB Linux Hosting</li>
                <li>Dedicated Tech Experts</li>
                <li>24/7 System Monitoring</li>
                <li>Security Management</li>
                <li>Unlimited Download</li>
              </ul>
            <CustomBtn
            href={"/"}
            text={"Choose Plan"}
             />
            </div>
        </div>
        <div className={styles.plan}>
          <div className={styles.planTop}>
              <div className={styles.topLeft}>
                <div className={styles.planTitle}>
                  <h3>Basic Plan</h3>
                </div>
                <div className={styles.price}>
                  <span className={styles.priceItem}>$</span>
                  <span className={styles.priceItem}>29</span>
                  <span className={styles.pricelast}>/monthly</span>
                </div>
              </div>
            <div className={styles.icon}>
            <Image src="/blob.svg" fill alt="a" />
              <LiaBookReaderSolid />
            </div>
          </div>
           <div className={styles.features}>
              <ul>
                <li>Free 15 GB Linux Hosting</li>
                <li>Dedicated Tech Experts</li>
                <li>24/7 System Monitoring</li>
                <li>Security Management</li>
                <li>Unlimited Download</li>
              </ul>
            <CustomBtn
            href={"/"}
            text={"Choose Plan"}
             />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
