"use client";
import React, { useState } from "react";
import styles from "./list.module.css";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Project List</h2>
        <div className={styles.lists}>
          <div className={styles.item}>
            <div className={styles.title}>
              lorem lorem loremloremloremloremloremlorem
            </div>
            <div className={styles.middle}>
              <div className={styles.statusBtn}>status</div>
              <div onClick={toggle} className={styles.detailBtn}>
                detail
              </div>
            </div>
            <div className={styles.right}>
              <Link href="" className={styles.edit}>
                edit
              </Link>
              <div className={styles.delete}>delete</div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.toggleMenu}>
          <div className={styles.toggleContainer}>
            <div onClick={toggle} className={styles.toggleCloseBtn}>
              <GrClose />
            </div>
            <div className={styles.toggleItem}>
                <div className={styles.info}>
                  <div className={styles.toogleItemdetail}>
                    <span className={styles.itemDetailTitle}>
                      Completed Date:{" "}
                    </span>
                    <span className={styles.answer}>23-12-2023</span>
                  </div>
                  <div className={styles.toogleItemdetail}>
                    <span className={styles.itemDetailTitle}>Category: </span>
                    <span className={styles.answer}>Technology</span>
                  </div>
                  <div className={styles.toogleItemdetail}>
                    <span className={styles.itemDetailTitle}>Client: </span>
                    <span className={styles.answer}>Robert Fox</span>
                  </div>
                  <div className={styles.toogleItemdetail}>
                    <span className={styles.itemDetailTitle}>Location: </span>
                    <span className={styles.answer}>fot kde, USA</span>
                  </div>
                </div>
                <div>aaa</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
