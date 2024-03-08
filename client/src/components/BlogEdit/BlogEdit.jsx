"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { BlogService } from "@/services/blog.service";
import { useRouter } from "next/navigation";

const BlogEdit = ({ data, cat }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: data.blog.title,
    tags: data.blog.tags,
    category_id: data.blog.category_id,
    read_time: data.blog.read_time,
    status: data.blog.status,
  });
  const [edit, setEdit] = useState(data.blog.body);
  const [images, setImages] = useState([]);
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
    try {
      const updatedBlog =  await BlogService.updateBlog(data.blog.id, images, inputs, edit);
      if(updatedBlog.status === 201){
        router.push("/admin/blog/list");
        router.refresh();
      }else{
        throw new Error("Failed to update data");
      }
    } catch (error) {
      console.error("Failed to update blog:", error);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Blog Update</h2>
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
          <Image
              alt="as"
              src={`${process.env.API_BASE_URLL}/storage/images/${data.testimonial.image}`}
              width={50}
              height={50}
            />
            <label className={styles.label}>Image</label>
            <input type="file" id="file" name="image" onChange={handleImageChange} />
          </div>
          <div className={styles.sun}>
            <label className={styles.label}>Description</label>
            <SunEditor
              width="100%"
              height="500px"
              name="body"
              defaultValue={edit}
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
            <select
              name="category_id"
              value={inputs.category_id}
              onChange={handleChange}
            >
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
              value={inputs.read_time}
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
              defaultValue={inputs.status}
              name="status"
              defaultChecked={inputs.status === 1}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.btn}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;
