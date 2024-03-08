"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { SettingsService } from "@/services/settings.service";
import { useRouter } from "next/navigation";

const SettingsPage = ({ data }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    logo_pathname: data.settings.logo_pathname,
    video_url: data.settings.video_url,
    satisfied_count: data.settings.satisfied_count,
    finish_project_count: data.settings.finish_project_count,
    experts_count: data.settings.experts_count,
    media_post_count: data.settings.media_post_count,
    facebook_url: data.settings.facebook_url,
    instagram_url: data.settings.instagram_url,
    twitter_url: data.settings.twitter_url,
    github_url: data.settings.github_url,
  });
  const [image, setImage] = useState(data.settings.logo_pathname);
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
      const updateSettings = await SettingsService.updateSettings(
        data.settings.id,
        inputs,
        image
      );
      if (updateSettings.status === 201) {
        router.refresh();
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      throw new Error("Failed to update settings");
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Settings</h2>
        <form className={styles.form} onSubmit={handleSubmit} encType="multiple/form-data" >
          <div className={styles.formItem}>
            <Image
              alt="as"
              src={`${process.env.API_BASE_URLL}/storage/images/${data.settings.logo_pathname}`}
              width={250}
              height={75}
            />
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
              <input type="file" id="file" name="image" onChange={handleImageChange} />
            </label>
          </div>
          <div className={styles.formItem}>
            <label className={styles.label}>Video URL</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Video URL"
              name="video_url"
              value={inputs.video_url}
              onChange={handleChange}
            />
          </div>
          <div className={styles.counterWrapper}>
            <div className={styles.item}>
              <label htmlFor="">Facebook URL</label>
              <input
                type="text"
                name="facebook_url"
                value={inputs.facebook_url}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="">Instagram URL</label>
              <input
                type="text"
                name="instagram_url"
                value={inputs.instagram_url}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="">Twitter URL</label>
              <input
                type="text"
                name="twitter_url"
                value={inputs.twitter_url}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="">Github URL</label>
              <input
                type="text"
                name="github_url"
                value={inputs.github_url}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.counterWrapper}>
            <div className={styles.item}>
              <label htmlFor="">Satisfied Clients Number</label>
              <input
                type="number"
                min="0"
                name="satisfied_count"
                value={inputs.satisfied_count}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="">Finished Projects Number</label>
              <input
                type="number"
                min="0"
                name="finish_project_count"
                value={inputs.finish_project_count}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="">Skilled Experts Number</label>
              <input
                type="number"
                min="0"
                name="experts_count"
                value={inputs.experts_count}
                onChange={handleChange}
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="">Media Posts Number</label>
              <input
                type="number"
                min="0"
                name="media_post_count"
                value={inputs.media_post_count}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
