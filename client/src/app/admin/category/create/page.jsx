"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const page = () => {
  const [inputs, setInputs] = useState({
    title: "",
    status: "",
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
    fetch(`${process.env.API_BASE_URL}/category`, requestOptions)
      .then(window.location.reload())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Category Create</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formItem}>
            <label className={styles.label}>Title</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Project Title"
              value={inputs.title}
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
              onChange={handleChange}
            />
          </div>
          <button className={styles.btn}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default page;
