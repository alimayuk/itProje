"use client";
import React, { useState } from "react";
import styles from "./list.module.css";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { ProjectService } from "@/services/project.service";

const ProjectList = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [items, setItems] = useState(data.projects);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleDelete = async (id) => {
    try {
      const projectDelete = await ProjectService.deleteProject(id);
      if (projectDelete.status === 201) {
        setItems(items.filter((item) => item.id !== id));
      } else {
        throw new Error("Project deleted failed");
      }
    } catch (error) {
      console.log("error deleting data:", error);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Project List</h2>
        <div className={styles.lists}>
          {items.map((item, index) => (
            <div className={styles.item}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.middle}>
                <div className={styles.statusBtn}>
                  {item.status == 1 ? (
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
                <Link
                  href={`/admin/project/edit/${item.slug}`}
                  className={styles.edit}
                >
                  edit
                </Link>
                <div
                  onClick={() => handleDelete(item.id)}
                  className={styles.delete}
                >
                  Delete
                </div>
              </div>
              {openIndex === index && (
                <div key={item.id} className={styles.toggleMenu}>
                  <div className={styles.toggleContainer}>
                    <div onClick={toggle} className={styles.toggleCloseBtn}>
                      <GrClose />
                    </div>
                    <div className={styles.toggleItem}>
                      <div className={styles.info}>
                        <div className={styles.toogleItemdetail}>
                          <span className={styles.itemDetailTitle}>
                            Completed Date:{" "}
                          </span>
                          <span className={styles.answer}>{item.created_at}</span>
                        </div>
                        <div className={styles.toogleItemdetail}>
                          <span className={styles.itemDetailTitle}>
                            Category:{" "}
                          </span>
                          <span className={styles.answer}>{item.category.title}</span>
                        </div>
                        <div className={styles.toogleItemdetail}>
                          <span className={styles.itemDetailTitle}>
                            Client:{" "}
                          </span>
                          <span className={styles.answer}>{item.client}</span>
                        </div>
                        <div className={styles.toogleItemdetail}>
                          <span className={styles.itemDetailTitle}>
                            Location:{" "}
                          </span>
                          <span className={styles.answer}>{item.location}</span>
                        </div>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.body }}
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

export default ProjectList;
