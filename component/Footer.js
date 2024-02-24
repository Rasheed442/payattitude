import React from "react";
import style from "../styles/components/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { facebook, insta, linkdln, payattitude, twitter } from "@/public/ICON";
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

function Footer() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.top}>
          <Image src={payattitude} priority />
          <div className={style.socials}>
            <Image src={twitter} priority />
            <Image src={linkdln} priority />
            <Image src={insta} priority />
            <Image src={facebook} priority />
          </div>
        </div>

        <div className={style.label}>
          <h2>Products</h2>
          <div className={style.links}>
            <Link href="">
              <span>Payattitude Digital</span>
            </Link>
            <Link href="">
              <span>Payattitude Digital Collection</span>
            </Link>
            <Link href="">
              <span>Payattitude Corporate</span>
            </Link>
          </div>
        </div>
        <div className={style.label}>
          <h2>Company</h2>
          <div className={style.links}>
            <Link href="">
              <span>About us</span>
            </Link>
            <Link href="">
              <span>Careers</span>
            </Link>
            <Link href="">
              <span>Press</span>
            </Link>
            <Link href="">
              <span>Support</span>
            </Link>
            <Link href="">
              <span>Management</span>
            </Link>
            <Link href="">
              <span>Services</span>
            </Link>
          </div>
        </div>
        <div className={style.label}>
          <h2>Legal</h2>
          <div className={style.links}>
            <Link href="">
              <span>Privacy Policy</span>
            </Link>
          </div>
        </div>
        <div className={style.label}>
          <h2>Reach Us</h2>
          <div className={style.links}>
            <Link href="">
              <span>
                <IoMdMail size={20} />
                Customerservice@payattitude.com
              </span>
            </Link>
            <Link href="">
              <span>
                {" "}
                <MdAddCall size={20} />
                Payattitude Digital Collection
              </span>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <span style={{ color: "#98A2B3", fontSize: "13px" }}>
        ©2023 Payattitude. All rights reserved.
      </span>
    </div>
  );
}

export default Footer;