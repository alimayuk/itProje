"use client";
import React, { useState } from "react";
import styles from "./list.module.css";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineTags } from "react-icons/ai";
import { PiUser } from "react-icons/pi";
import { CgTimer } from "react-icons/cg";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Blog List</h2>
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
          <div className={styles.toggleItemDetail}>
            <PiUser /> <span>By Admin</span>
          </div>
          <div className={styles.toggleItemDetail}>
          <MdOutlineDateRange /> <span>22, Nov 2023</span>
          </div>
          <div className={styles.toggleItemDetail}>
          <AiOutlineTags /> <span>Technology</span>
          </div>
          <div className={styles.toggleItemDetail}>
          <CgTimer /> <span>Read Time</span>
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
