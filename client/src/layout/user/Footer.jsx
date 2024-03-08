import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaPhoneAlt,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
const Footer = ({data}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
            <Image src= {`${process.env.API_BASE_URLL}/storage/images/${data.logo_pathname}`} alt="logo" width={200} height={250} />
            </div>
            <div className={styles.desc}>
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </div>
            <div className={styles.icons}>
              <Link href={`${data.facebook_url}`} className={styles.icon}>
                <FaFacebookF />
              </Link>
              <Link href={`${data.instagram_url}`} className={styles.icon}>
                <FaInstagram />
              </Link>
              <Link href={`${data.twitter_url}`} className={styles.icon}>
                <FaTwitter />
              </Link>
              <Link href={`${data.github_url}`} className={styles.icon}>
                <FaGithub />
              </Link>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.title}>Site</div>
            <Link href="" className={styles.link}>
              Home
            </Link>
            <Link href="" className={styles.link}>
              About
            </Link>
            <Link href="" className={styles.link}>
              Case
            </Link>
            <Link href="" className={styles.link}>
              Pricing
            </Link>
            <Link href="" className={styles.link}>
              Testimonials
            </Link>
            <Link href="" className={styles.link}>
              Blog
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.adres}>
              4517 Washington Ave. Manchester, Kentucky 39495
            </div>
            <div className={styles.infos}>
              <div className={styles.info}>
                <div className={styles.infoIcon}>
                  <FaRegClock />
                </div>
                <div className={styles.text}>
                  <span>Opening Hours:</span>
                  <span>Mon - Sat: 10.00 AM - 4.00 PM</span>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.infoIcon}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.text}>
                  <span>Phone Call:</span>
                  <span>+1 234 567 890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © All Copyright 2024 by Ali Mayuk
          </div>
          <div className={styles.policy}>
            <Link href="" className={styles.link}>
              Terms & Condition
            </Link>
            <Link href="" className={styles.link}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
