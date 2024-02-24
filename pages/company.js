import React, { useState } from "react";
import style from "../styles/PagesStyle/company.module.css";
import TopHeader from "@/component/TopHeader";
import Image from "next/image";
import { bord, bord1, bord2, bord3, bord4, bord5 } from "@/public/IMAGES";
import { appstore, googleplaystore } from "@/public/ICON";
import Footer from "@/component/Footer";
function company() {
  const [mission, setMission] = useState(true);
  const [vision, setVision] = useState();
  const [core, setCore] = useState();
  return (
    <div>
      <TopHeader />
      <div className={style.top}>
        <div className={style.prodbg}></div>
        <div className={style.about}>
          <span>Payattitude</span> is a Payment Scheme with innovative
          technologies for payments and financial transactions with focus on
          mobile and digital payments. Payattitude is owned by a consortium of
          leading Nigerian banks. Payattitude Global was incorporated and
          granted license in 2013 by the Central Bank of Nigeria (CBN) to
          operate as a payment scheme. Payattitude Global is the owner of the
          registered trademark Payattitude®, Person to Person with a patent
          granted in Nigeria in 2017 with the associated pay-off line Pay With
          Just Phone Number®. Payattitude owns the patent for the innovative
          Technology and Process that enables phone number to be used for
          different transactions available across all channels ATM, POS and WEB.
          These transactions are approved or authorized from ONLY the personal
          devices of the holder/customer of the Payattitude bank/partner. As one
          of the major players in the Payment Industry, Payattitude is
          introducing this innovative and convenient payment option as another
          major contribution and added value to the payment industry.
        </div>
      </div>
      <div className={style.myimg}>
        <div
          className={style.mission}
          onMouseOver={() => {
            setVision(false);
            setMission(true);
            setCore(false);
          }}
          style={{
            width: mission ? "50%" : "20%",
          }}
        >
          <div className={style.content}>
            <h2>Our Mission</h2>
            <span
              style={{
                display: mission ? "" : "none",
              }}
            >
              Leverage our people and partners to securely enhance commerce
              <br />
              and enable convenience through seamless transactions across
              <br />
              multiple channels at all times.
            </span>
          </div>
        </div>
        <div
          className={style.vision}
          style={{ width: vision ? "50%" : "" }}
          onMouseOver={() => {
            setVision(true);
            setMission(false);
            setCore(false);
          }}
        >
          <div className={style.content}>
            <h2>Our vision</h2>
            <span style={{ display: vision ? "block" : "" }}>
              To be the most preferred payment scheme in Africa.
            </span>
          </div>
        </div>
        <div
          className={style.cor}
          onMouseOver={() => {
            setVision(false);
            setMission(false);
            setCore(true);
          }}
          // onMouseOut={() => setMission(false)}
          style={{
            width: core ? "50%" : "20%",
          }}
        >
          <div className={style.content}>
            <h2>Our Core Value </h2>
            <span style={{ display: core ? "block" : "" }}>
              R - Reliability
            </span>
            <span style={{ display: core ? "block" : "" }}>
              I – Inclusive innovation
            </span>
            <span style={{ display: core ? "block" : "" }}>S - Security</span>
            <span style={{ display: core ? "block" : "" }}>E - Enterprise</span>
          </div>
        </div>
      </div>

      <div className={style.board}>
        <span>Directors</span>
        <h2>Meet our board of directors</h2>
        <p>
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers <br />
          you to do you best work.
        </p>
      </div>

      <div className={style.chairmen}>
        <Image src={bord} />
        <Image src={bord1} />
        <Image src={bord2} />
        <Image src={bord3} />
        <Image src={bord4} />
        <Image src={bord5} />
      </div>
      <div className={style.secfoot}>
        <span>What are you waiting for?</span>
        <h2>Get your new Payment Digital remote now!!</h2>
        <p>Download the app</p>
        <div className={style.download}>
          <Image src={googleplaystore} />
          <Image src={appstore} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default company;
