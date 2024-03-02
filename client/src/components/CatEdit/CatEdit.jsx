"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'

const CatEdit = ({slug}) => {
  const router = useRouter();
    const [inputs, setInputs] = useState({
        title: slug.category.title,
        status: slug.category.status
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? (checked ? "1" : "0") : value;
        setInputs((prev) => {
          return { ...prev, [name]: newValue };
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        var formdata = new FormData();
        for (const key in inputs) {
          formdata.append(key, inputs[key]);
        }
        var requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formdata,
        };
        fetch(`${process.env.API_BASE_URL}/category/${slug.category.id}`, requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
  return (
    <div className={styles.page}>
    <div className={styles.container}>
      <h2>Category Update</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Project Title"
            defaultValue={inputs.title}
            name="title"
            onChange={handleChange}
          />
        </div>

        <div className={styles.checkboxItem}>
          <label className={styles.label}>Status</label>
          <input
            className={styles.input}
            type="checkbox"
            value={1}
            name="status"
            defaultChecked={inputs.status == "1"}
            onChange={handleChange}
          />
        </div>
        <button className={styles.btn}>Update</button>
      </form>
    </div>
  </div>
  )
}

export default CatEdit