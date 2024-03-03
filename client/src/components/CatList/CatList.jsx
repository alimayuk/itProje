"use client";
import React, {useState } from "react";
import styles from "./list.module.css";
import Link from "next/link";

const CatList = ({ data }) => {
  const [items, setItems] = useState(data.categories);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.API_BASE_URL}/category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to delete data");
      }
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  console.log(data.categories);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Category List</h2>
        <div className={styles.lists}>
          {items?.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.middle}>
                <div className={styles.statusBtn}>
                  {item.status == 1 ? (
                    <div className={styles.activeBtn}>Active</div>
                  ) : (
                    <div className={styles.passiveBtn}>Passive</div>
                  )}
                </div>
              </div>
              <div className={styles.actionBtns}>
                <Link
                  href={`/admin/category/edit/${item.slug}`}
                  className={styles.editBtn}
                >
                  Edit
                </Link>
                <div
                  onClick={() => handleDelete(item.id)}
                  className={styles.deleteBtn}
                >
                  Delete
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatList;
