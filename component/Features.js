import React, { useEffect } from "react";
import style from "../styles/components/feature.module.css";
import Image from "next/image";
import {
  cashphone,
  eclipse,
  phonepos,
  receiptPhone,
  recievephone,
} from "@/public/ICON";
import { flow1, flow2, flow3, flow5, flow6 } from "@/public/IMAGES";
import Lottie from "lottie-react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Why from "./Why";
function Features() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const paymentcontrol = [
    {
      name: "Collections with Phone number ",
      image: flow1,
      description:
        "Offerings, tithes and contributions can now be collected easily with just a number",
    },
    {
      name: "Send payment requests",
      image: flow2,
      description:
        "Request for payment/transfer from family and friends using just phone number.",
    },
    {
      name: "Recieve Payment Requests",
      image: flow3,
      description:
        "Receive and securely authorize payment/transfer request from friends and family from your mobile phone.",
    },
    {
      name: "Link All your Accounts",
      image: flow5,
      description:
        "Customers can link as many accounts in different banks to their Payattitude Digital app.",
    },
    {
      name: "ATM Withdrawals with Phone Number",
      image: flow6,
      description:
        "Send friends, family and staff to withdraw cash at the ATM with just a phone number",
    },
    {
      name: "Secure Transactions",
      image: flow3,
      description:
        "Perform highly secure online transactions with your phone number and a 6 digit PIN",
    },
  ];

  // JSON FOR THE CAROUSELS

  const carouselswipe = [
    {
      image: phonepos,
      title: "Use your Phone as POS",
      desc:
        "Businesses that cannot afford to incur additional costs of POS have the opportunity to use their mobile phones as POS with PayAttitude Digital app installed on their devices.",
    },
    {
      image: cashphone,
      title: "Cash Withdrawal and Deposit",
      desc:
        "Cash withdrawal & deposit with your phone number at any of our experience centers or Agents.",
    },
    {
      image: recievephone,
      title: "Send and receive money using your phone number.",
      desc:
        "Subscribers can receive and securely authorize payment/transfer request from friends and family on their mobile phones using a secured PIN.",
    },
    {
      image: phonepos,
      title: "Approve Transactions on the Go",
      desc:
        "Approve online transactions and ATM cash withdrawals from anywhere you are just with your phone number. This is now your new financial payments remote control.",
    },
    {
      image: receiptPhone,
      title: "Online Digital Receipts",
      desc:
        "Get accurate and detailed digital receipts for every transactions to help keep track of your spending",
    },
  ];
  return (
    <>
      <div className={style.background}>
        <div className={style.eclipse}>
          <Image src={eclipse} priority />
        </div>
        <div className={style.features}>
          <span>Features</span>
          <p>An all-new payment remote control</p>
        </div>

        <div className={style.grid}>
          {paymentcontrol.map((p) => {
            return (
              <div className={style.lottie}>
                <Lottie
                  animationData={p?.image}
                  style={{ width: "170px", height: "70px" }}
                />
                <p>{p?.name}</p>
                <span>{p?.description}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.features}>
        <span>Benefits</span>
        <p style={{ color: "black" }}>
          You can do more with just your mobile phone
        </p>
      </div>

      <div className={style.phonepos}>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className={style.swiper}
        >
          {carouselswipe.map((c) => {
            return (
              <SwiperSlide>
                <div className={style.swiperslide} data-aos="slide-up">
                  <Image src={c?.image} priority />
                  <div className={style.contentslides}>
                    <h2>{c?.title}</h2>
                    <p>{c.desc}</p>
                    <Link href="/">
                      <span>
                        Learn more <FaArrowRight size={10} />
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Why />
    </>
  );
}

export default Features;
