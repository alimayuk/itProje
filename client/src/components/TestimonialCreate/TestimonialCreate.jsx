"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { TestimonialService } from "@/services/testimonial.service";
import { useRouter } from "next/navigation";

const TestimonialCreate = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    name: "",
    job: "",
    comment: "",
    raiting: "",
    status: 0,
  });
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? (checked ? "1" : "0") : value;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: newValue,
      };
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createTestimonial = await TestimonialService.createTestimonial(
        inputs,
        image
      );
      if (createTestimonial.status === 201) {
        router.push("/admin/testimonial/list");
        router.refresh();
      } else {
        throw new Error("Couldn't create testimonial");
      }
    } catch (error) {
      throw new Error("Failed to create project");
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Testimonial Create</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          encType="multiple/form-data"
        >
          <div className={styles.formItem}>
            <label className={styles.custumFileUpload} htmlFor="file">
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill=""
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.text}>
                <span>Click to upload image</span>
              </div>
              <input type="file" id="file" onChange={handleImageChange} />
            </label>
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={styles.input}
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Job</label>
            <input
              type="text"
              name="job"
              placeholder="Job"
              className={styles.input}
              value={inputs.job}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="">Comment</label>
            <input
              type="text"
              name="comment"
              placeholder="Comment"
              className={styles.input}
              value={inputs.comment}
              onChange={handleChange}
            />
          </div>
          <div className={styles.ratingItem}>
            <label className={styles.label}>Rating</label>
            <div className={styles.rating}>
              <input
                value="5"
                name="rating"
                id="star5"
                type="radio"
                onChange={handleChange}
              />
              <label htmlFor="star5"></label>
              <input
                value="4"
                name="rating"
                id="star4"
                type="radio"
                onChange={handleChange}
              />
              <label htmlFor="star4"></label>
              <input
                value="3"
                name="rating"
                id="star3"
                type="radio"
                onChange={handleChange}
              />
              <label htmlFor="star3"></label>
              <input
                value="2"
                name="rating"
                id="star2"
                type="radio"
                onChange={handleChange}
              />
              <label htmlFor="star2"></label>
              <input
                value="1"
                name="rating"
                id="star1"
                type="radio"
                onChange={handleChange}
              />
              <label htmlFor="star1"></label>
            </div>
          </div>
          <div className={styles.checkboxItem}>
            <label className={styles.label}>Status</label>
            <input
              className={styles.input}
              type="checkbox"
              placeholder="Status"
              name="status"
              value={1}
              onChange={handleChange}
            />
          </div>
          <div className={styles.submitButton}>
            <button className={styles.btn} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialCreate;
