"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { TestimonialService } from "@/services/testimonial.service";
import Link from "next/link";

const TestimonialList = ({data}) => {
    const [items, setItems] = useState(data.testimonials);
    const handleDelete = async (id) => {
       try {
        const deleteTestimonial = await TestimonialService.deleteTestimonial(id);
        if (deleteTestimonial.status === 201) {
            setItems(prevItems => prevItems.filter((item) => item.id !== id));
        }else {
            throw new Error("Failed to delete data");
          }
       } catch (error) {
        console.error("Error deleting data:", error);
       }
    };
    return (
        <div className={styles.page}>
          <div className={styles.container}>
            <h2>Testimonial List</h2>
            <div className={styles.lists}>
              {items.map((item) =>(
                <div className={styles.item} key={item.id}>
                <div className={styles.first}>
                  <Image alt={item.name} src={`${process.env.API_BASE_URLL}/storage/images/${item.image}`} width={50} height={50} />
                  <div>
                    <div>{item.name}</div>
                    <div>{item.job}</div>
                  </div>
                </div>
                <div className={styles.second}>
                {item.comment}
                </div>
                <div className={styles.third}>
                  <div className={styles.statusBtn}>
                  {item.status == 1 ? (
                    <div className={styles.activeBtn}>Active</div>
                  ) : (
                    <div className={styles.passiveBtn}>Passive</div>
                  )}
                </div>
                  <div className={styles.ratingBtn}>{item.rating}/5</div>
                </div>
                <div className={styles.third}>
                  <Link href={`/admin/testimonial/edit/${item.id}`} className={styles.editBtn}>Edit</Link>
                  <div className={styles.deleteBtn} onClick={()=> handleDelete(item.id)}>Delete</div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default TestimonialList