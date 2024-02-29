"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});


const page = () => {
  const [edit, setEdit] = useState("");

  const editorChange = (content) => {
    setEdit(content);
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
      <h2>Category Create</h2>
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label className={styles.label}>Title</label>
            <input className={styles.input} type="text" placeholder="Project Title" />
          </div>
         
          <div className={styles.checkboxItem}>
            <label className={styles.label}>Status</label>
            <input className={styles.input} type="checkbox" placeholder="Status" />
          </div>
          <button className={styles.btn}>Create</button>
        </form>
      </div>
    </div>
  )
}

export default page