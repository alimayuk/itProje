"use client";
import React, { useState } from "react";
import styles from "./list.module.css";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { MdOutlineCategory, MdOutlineDateRange } from "react-icons/md";
import { AiOutlineTags } from "react-icons/ai";
import { PiUser } from "react-icons/pi";
import { CgTimer } from "react-icons/cg";
import { BlogService } from "@/services/blog.service";

const BlogList = ({ data }) => {
  const [items, setItems] = useState(data.blogs);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleDelete = async (id) => {
    try {
      const blogDelete = await BlogService.deleteBlog(id);
      if (blogDelete.status === 201) {
        setItems(prevItems => prevItems.filter((item) => item.id !== id));
      } else {
        throw new Error("Failed to delete data");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Blog List</h2>
        <div className={styles.lists}>
          {items.map((items, index) => (
            <div key={items.id} className={styles.item}>
              <div className={styles.title}>{items.title}</div>
              <div className={styles.middle}>
                <div className={styles.statusBtn}>
                  {items.status == 1 ? (
                    <div className={styles.activeBtn}>Active</div>
                  ) : (
                    <div className={styles.passiveBtn}>Passive</div>
                  )}
                </div>
                <div onClick={() => toggle(index)} className={styles.detailBtn}>
                  Detail
                </div>
              </div>
              <div className={styles.right}>
                <Link href={`/admin/blog/edit/${items.slug}`} className={styles.edit}>
                  edit
                </Link>
                <div
                  onClick={() => handleDelete(items.id)}
                  className={styles.delete}
                >
                  Delete
                </div>
              </div>
              {openIndex === index && (
                <div key={items.id} className={styles.toggleMenu}>
                  <div className={styles.toggleContainer}>
                    <div
                      onClick={() => toggle(index)}
                      className={styles.toggleCloseBtn}
                    >
                      <GrClose />
                    </div>
                    <div className={styles.toggleItem}>
                      <div className={styles.info}>
                        <div className={styles.toggleItemDetail}>
                          <PiUser /> <span>By Admin</span>
                        </div>
                        <div className={styles.toggleItemDetail}>
                          <MdOutlineDateRange /> <span>{items.created_at}</span>
                        </div>
                        <div className={styles.toggleItemDetail}>
                        <MdOutlineCategory />  <span>{items.category.title}</span>
                        </div>
                        <div className={styles.toggleItemDetail}>
                          <CgTimer /> <span>{items.read_time}</span>
                        </div>
                        <div className={styles.toggleItemDetail}>
                        <AiOutlineTags />{" "}
                          <span className={styles.tags}>
                            {items.tags.split(",").map((tag, index) => (
                              <div key={index} className={styles.tag}>
                                {tag}
                              </div>
                            ))}
                          </span>
                        </div>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: items.body }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
