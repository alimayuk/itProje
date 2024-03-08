"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { ProjectService } from "@/services/project.service";
import { useRouter } from "next/navigation";

const ProjectCreate = ({ cat }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    title: "",
    client: "",
    location: "",
    category_id: "",
    status: 0,
  });
  const [edit, setEdit] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    setInputs((prev) => {
      return { ...prev, [name]: newValue };
    });
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
      const createProject = await ProjectService.createProject(
        inputs,
        images,
        edit
      );
      if (createProject.status === 201) {
        router.push("/admin/project/list");
        router.refresh();
      } else {
        throw new Error("Couldn't create project");
      }
    } catch (error) {
      throw new Error("Failed to create project");
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Project Create</h2>
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

export default ProjectCreate;
