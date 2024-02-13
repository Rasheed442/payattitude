import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { payattitude } from "@/public/ICON";
import Link from "next/link";
import styles from "../styles/components/topheader.module.css";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

function TopHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Image src={payattitude} priority />
      <div className={open ? styles.navmenu : styles.navlink}>
        <Link href="/">
          <span
            style={{ color: router.pathname === "/" ? "#F58220" : "black" }}
          >
            Home
          </span>
        </Link>
        <Link href="/">
          <span>Products</span>
        </Link>
        <Link href="/">
          <span>Partners {open ? "" : <FaChevronDown size={13} />}</span>
        </Link>
        <Link href="/">
          <span>Company {open ? "" : <FaChevronDown size={13} />}</span>
        </Link>
        <Link href="/">
          <span>Resources{open ? "" : <FaChevronDown size={13} />}</span>
        </Link>
      </div>

      <div className={styles.btn}>
        <button>Contact Us</button>
      </div>

      <div className={styles.menubar} onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose size={30} style={{ color: "orange" }} />
        ) : (
          <RiMenu3Line size={30} style={{ color: "orange" }} />
        )}
      </div>
    </div>
  );
}

export default TopHeader;
