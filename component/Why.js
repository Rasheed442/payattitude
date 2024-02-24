import React from "react";
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
function Why() {
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
      <div className={style.top}>
        <span>Why Payattitude</span>
        <h2>
          Building an innovative
          <br />
          solution for the unbanked
        </h2>
        <p>
          We provide a seamless solution that allows businesses to effortlessly
          <br />
          accept and send funds through your mobile phone number
        </p>
      </div>
      <div className={style.purpose}>
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
            <Image src={caroicon} />
            <p>Ifeanyi Okoli</p>
            <span>Chief Digital Designer, Hope Bank</span>
          </div>
        </div>
      </div>

      <div className={style.join}>
        <div className={style.people}>
          <p>
            Join 100k+ people who transact with
            <br /> <span>Payattitude</span>
          </p>
          <div className={style.store}>
            <Image src={googleplaystore} />
            <Image src={appstore} />
          </div>
        </div>
        <Image src={payattitudemob} />
      </div>
      <Footer />
    </div>
  );
}

export default Why;