"use client";

import Link from "next/link";
import styles from "../login/auth.module.css";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUser } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !passwordConfirmation) {
      setError("Tüm alanları doldurunuz !");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("login");
      } else {
        console.log("Failed to register user");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginBg}></div>
      <div className={styles.formWrapper}>
        <div className={styles.formTop}>
          <Image src="/preview.jpeg" width={100} height={100} alt="logo" />
          <h2>Register</h2>
        </div>

        <form onSubmit={handleSubmit} className={styles.formBody}>
          <div className={styles.inputWrapper}>
            <FaUser />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
              autoComplete="name"
            />
          </div>
          <div className={styles.inputWrapper}>
            <MdEmail />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
              autoComplete="email"
            />{" "}
          </div>
          <div className={styles.inputWrapper}>
            <FaLock />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              autoComplete="new-password"
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaArrowRotateRight />
            <input
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              placeholder="password confirmation"
              autoComplete="new-password"
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Register</button>
          <Link href="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default page;