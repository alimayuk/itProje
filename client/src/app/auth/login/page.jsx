"use client";
import Link from "next/link";
import styles from "./auth.module.css";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { AuthService } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [email, setEmail] = useState("ali@gmail.com");
  const [password, setPassword] = useState("123123a.");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await AuthService.login(email, password);
    if (response.status === 200) {
      router.push("/admin/");
    }else{
      throw new Error("Failed to login");
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
          <h2>LOG IN</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.formBody}>
          <div className={styles.inputWrapper}>
            <MdEmail />{" "}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              autoComplete="email"
              value={email}
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaLock />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit">Login</button>
          <Link href="/auth/register">Register</Link>
        </form>
      </div>
    </div>
  );
}