import React, { useState, useEffect } from "react";
import Image from "next/image";
import { payattitude } from "@/public/ICON";
import Link from "next/link";
import styles from "../styles/components/topheader.module.css";
import { FaChevronDown } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
function TopHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [partner, setPartner] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={styles.container}>
      <Image src={payattitude} priority />
      <div className={styles.navlink}>
        <Link href="/">
          <span
            style={{
              color: router.pathname === "/" ? "#F58220" : "black",
              borderBottom: router.pathname === "/" ? "2px solid #F58220" : "",
            }}
          >
            Home
          </span>
        </Link>
        <span
          onClick={() => router.push("/products")}
          style={{
            color: router.pathname === "/products" ? "#F58220" : "black",
            borderBottom:
              router.pathname === "/products" ? "2px solid #F58220" : "",
          }}
        >
          Product
        </span>
        <Link href="">
          <span onClick={() => setPartner(!partner)}>
            Partners {open ? "" : <FaChevronDown size={13} />}
          </span>
          {partner && (
            <div className={styles.submenu}>
              <Link href="/partner/agent">
                <p>Agent</p>
              </Link>
              <Link href="/partner/merchant">
                <p>Merchants</p>
              </Link>
            </div>
          )}
        </Link>
        <Link href="/company">
          <span
            style={{
              color: router.pathname === "/company" ? "#F58220" : "black",
              borderBottom:
                router.pathname === "/company" ? "2px solid #F58220" : "",
            }}
          >
            Company
            {/* {open ? "" : <FaChevronDown size={13} />} */}
          </span>
        </Link>
        <Link href="">
          <span
            // style={{
            //   color:
            //     router.pathname === "/resources/faqs" || "/resources/userguide"
            //       ? "#F58220"
            //       : "black",
            //   borderBottom:
            //     router.pathname === "/resources/faqs" || "/resources/userguide"
            //       ? "2px solid #F58220"
            //       : "",
            // }}
            onClick={() => setSub(!sub)}
          >
            Resources{open ? "" : <FaChevronDown size={13} />}
          </span>
          {sub && (
            <div className={styles.submenu}>
              <Link href="/resources/faqs">
                <p>FAQs</p>
              </Link>
              {/* <Link href="/resources/userguide">
                <p>User Guide</p>
              </Link> */}
            </div>
          )}
        </Link>
      </div>

      <div
        className={styles.btn}
        onClick={() => router.push("/contact")}
        style={{ cursor: "poniter" }}
      >
        <button>Contact Us</button>
      </div>

      <div className={styles.menubar} onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose size={30} style={{ color: "orange" }} />
        ) : (
          <RiMenu3Line size={30} style={{ color: "orange" }} />
        )}
      </div>

      {/* for navmenu */}

      {open && (
        <div className={styles.navmenucontainer} data-aos="slide-right">
          <div className={styles.navmenu}>
            <Link href="/">
              <span
                style={{
                  color: router.pathname === "/" ? "#F58220" : "black",
                  borderBottom:
                    router.pathname === "/" ? "2px solid #F58220" : "",
                }}
              >
                Home
              </span>
            </Link>
            <Link href="/products">
              <span
                style={{
                  color: router.pathname === "/products" ? "#F58220" : "black",
                  borderBottom:
                    router.pathname === "/products" ? "2px solid #F58220" : "",
                }}
              >
                Products
              </span>
            </Link>
            <span onClick={() => setPartner(!partner)}>
              Partners {open ? "" : <FaChevronDown size={13} />}
            </span>
            {partner && (
              <div className={styles.submenu}>
                <Link href="/partner/agent">
                  <p>Agent</p>
                </Link>
                <Link href="/partner/merchant">
                  <p>Merchants</p>
                </Link>
              </div>
            )}
            <Link href="/company">
              <span
                style={{
                  color: router.pathname === "/company" ? "#F58220" : "black",
                  borderBottom:
                    router.pathname === "/company" ? "2px solid #F58220" : "",
                }}
              >
                Company {open ? "" : <FaChevronDown size={13} />}
              </span>
            </Link>
            <span onClick={() => setSub(!sub)}>
              Resources{open ? "" : <FaChevronDown size={13} />}
            </span>
            {sub && (
              <div className={styles.submenu}>
                <Link href="/resources/faqs">
                  <p>FAQs</p>
                </Link>
                <Link href="/resources/userguide">
                  {/* <p>User Guide</p> */}
                </Link>
              </div>
            )}
          </div>
          <div
            className={styles.btn2}
            onClick={() => router.push("/contact")}
            style={{ cursor: "poniter" }}
          >
            <button>Contact Us</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopHeader;
