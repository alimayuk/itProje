"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import "suneditor/dist/css/suneditor.min.css";
import SunEditor from "suneditor-react";
import { BlogService } from "@/services/blog.service";
import { useRouter } from "next/navigation";

const BlogCreate = ({ cat }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: "",
    tags: "",
    category_id: "",
    read_time: "",
    status: 0,
  });
  const [edit, setEdit] = useState("");
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? 1 : 0 ) : value;
    setInputs((prev) => {
      return { ...prev, [name]: newValue };
    });
  };
  const editorChange = (content) => {
    setEdit(content);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createBlog = await BlogService.createBlog(inputs, image, edit);
      if (createBlog.status === 201) {
        router.push("/admin/blog/list");
        router.refresh();
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      console.error("Failed to update blog:", error);
    }
  };
  function onImageUploadBefore() {
    return (files, _info, uploadHandler) => {
      (async () => {
        const formdata = new FormData();
        formdata.append("file", files[0]);
        const response = await fetch(`${process.env.API_BASE_URL}/editor/image`, {
          method: "POST",
          body: formdata,
          headers: {
            Accept: "application/json",
          },
        });
        const data = await response.json();

        const res = {
          result: [
            {
              url: `${process.env.API_BASE_URLL}/storage/images/${data.data}`,
              name: "thumbnail",
            },
          ],
        };

        uploadHandler(res);
      })();
      uploadHandler();
    };
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Blog Create</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          encType="multiple/form-data"
        >
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
          <div className={styles.formItem}>
            <label className={styles.label}>İmage</label>
            <input
              className={styles.input}
              type="file"
              onChange={handleImageChange}
            />
          </div>
          <div className={styles.sun}>
            <label className={styles.label}>Description</label>
            <SunEditor
              width="100%"
              height="500px"
              name="body"
              value={edit}
              onChange={editorChange}
              onImageUploadBefore={onImageUploadBefore()}
              setOptions={{
                buttonList: [
                  [
                    "font",
                    "fontSize",
                    "formatBlock",
                    "paragraphStyle",
                    "blockquote",
                    "bold",
                    "underline",
                    "italic",
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
          <button type="submit" className={styles.btn}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogCreate;
