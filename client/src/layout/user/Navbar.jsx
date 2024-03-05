"use client"
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaBars, FaFacebook, FaLinkedin, FaPaperPlane, FaPhoneVolume, FaTwitter, FaYoutube } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import CustomBtn from "@/components/customBtn/CustomBtn";
import Image from "next/image";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`${isScrolled ? styles.sticky : styles.line} ${styles.navbar}`}>
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}>
           <Image src="/logo.svg" alt="logo" width={200} height={250} />
          </Link>
          <div className={styles.linksWrapper}>
            <ul className={styles.links}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Case</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Testimonials</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.button}>
            <CustomBtn href={"/"} text={"Get A Start"}/>
          </div>
          <div className={styles.menuBtn} onClick={toggleSidebar}>
              <FaBars />
            </div>
        </div>
      </header>
      <div className={`${isOpen ? styles.sidebarOpen : ""} ${styles.sidebar}`}>
        <div className={styles.sideTop}>
          <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="logo" width={200} height={70} />
          </Link>
          <div className={styles.menuBtn} onClick={toggleSidebar}>
            <IoMdClose />
          </div>
        </div>
        <div className={styles.body}>
          <ul className={styles.mobilMenu}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Case</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>
        <div className={styles.sideBottom}>
            <div className={styles.infoItem}>
            <IoLocationSharp /> <span>example@example.com</span>
            </div>
            <div className={styles.infoItem}>
            <FaPhoneVolume /> <span>+208-6666-0112</span>
            </div>
            <div className={styles.infoItem}>
            <FaPaperPlane /> <span>info@example.com</span>
            </div>
            <div className={styles.social}>
                <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </Link>
                <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </Link>
                <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
