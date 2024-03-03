"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const BlogCreate = ({ cat }) => {
  const [inputs, setInputs] = useState({
    title: "",
    tags: "",
    category_id: "",
    read_time: "",
    status: "",
  });
  const [edit, setEdit] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? "1" : "0") : value;
    setInputs((prev) => {
      return { ...prev, [name]: newValue };
    });
  };
  const editorChange = (content) => {
    setEdit(content);
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    for (const key in inputs) {
      formdata.append(key, inputs[key]);
    }
    formdata.append("body", edit);
    fetch(`${process.env.API_BASE_URL}/blog`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formdata,
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Blog Create</h2>
        <form className={styles.form} onSubmit={handleSubmit} encType="multiple/form-data">
          <div className={styles.formItem}>
            <label className={styles.label}>Title</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Project Title"
              name="title"
              value={inputs.title}
              onChange={handleChange}
            />
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
            <input
              className={styles.input}
              type="text"
              placeholder="Tags"
              name="tags"
              value={inputs.tags}
              onChange={handleChange}
            />
            <small>(leave a comma between each word without decoupling)</small>
          </div>
          <div className={styles.selectItem}>
            <label className={styles.label}>Category</label>
            <select name="category_id" onChange={handleChange}>
              <option value="">Select</option>
              {cat.categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Read Time</label>
            <input
              type="number"
              className={styles.input}
              name="read_time"
              placeholder="Read Time"
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles.checkboxItem}>
            <label className={styles.label}>Status</label>
            <input
              className={styles.input}
              type="checkbox"
              placeholder="Status"
              value={1}
              name="status"
              onChange={handleChange}
            />
          </div>
          <button className={styles.btn}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default BlogCreate;
