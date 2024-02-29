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
      <h2>Blog Create</h2>
        <form className={styles.form}>
          <div className={styles.formItem}>
            <label className={styles.label}>Title</label>
            <input className={styles.input} type="text" placeholder="Project Title" />
          </div>
          <div className={styles.sun}>
            <label className={styles.label}>Description</label>
            <SunEditor
            width="100%"
            height="500px"
            name="desc2"
            onChange={editorChange}
            imageUploadHandler={handleImageChange}
            setOptions={{
              buttonList: [
                [
                  "undo",
                  "redo",
                  "font",
                  "fontSize",
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                  "table",
                  "link",
                  "image",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "print",
                  "save",
                ],
              ],
            }}
          />
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Tags</label>
            <input className={styles.input} type="text" placeholder="Tags" />
            <small>(leave a comma between each word without decoupling)</small>
          </div>
          <div className={styles.selectItem}>
            <label className={styles.label}>Category</label>
            <select name="" id="">
              <option value="">Select</option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Read Time</label>
            <input type='number' className={styles.input} placeholder="Read Time"></input>
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