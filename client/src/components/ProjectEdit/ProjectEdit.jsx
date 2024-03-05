"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { ProjectService } from "@/services/project.service";
import { useRouter } from "next/navigation";

const ProjectEdit = ({ data, cat }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: data.project.title,
    client: data.project.client,
    location: data.project.location,
    category_id: data.project.category_id,
    status: data.project.status,
  });
  const [edit, setEdit] = useState(data.project.body);
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? 1 : 0) : value;
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
      const updateProject = await ProjectService.updateProject(data.project.id,images,inputs,edit);
      if (updateProject.status === 201) {
        router.push("/admin/project/list");
        router.refresh();
      } else {
        throw new Error("Couldn't update project");
      }
    } catch (error) {
      throw new Error("Failed to update project");
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Project Update</h2>
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
            <label className={styles.label}>Client Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Client Name"
              name="client"
              value={inputs.client}
              onChange={handleChange}
            />
          </div>
          <div className={styles.selectItem}>
            <label className={styles.label}>Category</label>
            <select name="category_id" value={inputs.category_id} onChange={handleChange}>
              <option value="">Select</option>
              {cat.categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Location</label>
            <input
              type="text"
              className={styles.input}
              placeholder="location"
              name="location"
              value={inputs.location}
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
          <button className={styles.btn}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectEdit;
