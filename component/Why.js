import React, { useEffect } from "react";
import style from "../styles/components/why.module.css";
import { flow1, flow2, flow3 } from "@/public/IMAGES";
import Lottie from "lottie-react";
import Image from "next/image";
import {
  appstore,
  caroicon,
  googleplaystore,
  man,
  payattitudemob,
  receiptPhone,
  recievephone,
} from "@/public/ICON";
import Footer from "./Footer";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
function Why() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const reasons = [
    {
      icon: flow1,
      title: "Track your Spending",
      desc:
        "Get accurate and detailed digital receipts for every transactions to help keep track of your spending",
    },
    {
      icon: flow2,
      title: "Accessible to All",
      desc:
        "We built a solution that is accessible to all, especially with people in the rural areas in mind.",
    },
    {
      icon: flow3,
      title: "High Success Rate",
      desc:
        "We prioritize reliability, ensuring that your payments go through smoothly and without disruptions.",
    },
  ];
  return (
    <div>
      <div className={style.top} data-aos="zoom-in">
        <span>Why Payattitude</span>
        <h2>
          Building an innovative
          <br />
          solution for everyone
        </h2>
        <p>
          With features and products that suit every lifestyle, Payattitude
          offers <br /> seamless banking and transactions to both the banked
          <br /> and unbanked.
        </p>
      </div>
      <div className={style.purpose} data-aos="slide-up">
        {reasons.map((d) => {
          return (
            <div className={style.lottie}>
              <Lottie
                animationData={d?.icon}
                style={{ width: "170px", height: "70px" }}
              />
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
            </div>
          );
        })}
      </div>

      <h2
        style={{
          color: "#1D2939",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "400",
          padding: "100px 0px 40px 0px",
        }}
      >
        Here's what our customers says about us
      </h2>

      <div className={style.customer}>
        <Image src={man} priority />
        <div className={style.refers}>
          <h2>
            “Love the simplicity of the service and the
            <br /> prompt customer support. We can’t <br />
            imagine working without it.”
          </h2>
          <div className={style.caroicon}>
            <Image src={caroicon} priority />
            <p>Ifeanyi Okoli</p>
            <span>Chief Digital Designer, Hope Bank</span>
          </div>
        </div>
      </div>

      <div className={style.join}>
        <div className={style.people} data-aos="slide-right">
          <p>
            Join 100k+ people who transact with
            <br /> <span>Payattitude</span>
          </p>
          <div className={style.store} style={{ cursor: "pointer" }}>
            <Image
              src={googleplaystore}
              onClick={() =>
                (window.location =
                  "https://digital.payattitude.com/completesignup")
              }
              priority
            />
            <Image
              src={appstore}
              onClick={() =>
                (window.location =
                  "https://itunes.apple.com/ng/app/payattitude-digital/id1343904100?mt=8")
              }
              priority
            />
          </div>
        </div>
        <Image src={payattitudemob} data-aos="slide-up" priority />
      </div>
      <Footer />
    </div>
  );
}

export default Why;
