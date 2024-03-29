import React, { useState } from "react";
import style from "../styles/PagesStyle/company.module.css";
import TopHeader from "@/component/TopHeader";
import Image from "next/image";
import {
  bord,
  bord1,
  bord2,
  bord3,
  bord4,
  bord5,
  commerce,
  companyy,
} from "@/public/IMAGES";
import { appstore, googleplaystore } from "@/public/ICON";
import Footer from "@/component/Footer";
import Francis from "@/bod/Francis";
import Agada from "@/bod/Agada";
import Victor from "@/bod/Victor";
import Samson from "@/bod/Samson";
import Segun from "@/bod/Segun";
import Kelvin from "@/bod/Kelvin";
function company() {
  const [mission, setMission] = useState(true);
  const [vision, setVision] = useState();
  const [core, setCore] = useState();
  // bord usestates

  const [Franciss, setFranciss] = useState(false);
  const [Agadas, setAgadas] = useState(false);
  const [victors, setVictors] = useState(false);
  const [sampsons, setSampsons] = useState(false);
  const [seguns, setSeguns] = useState(false);
  const [kelvins, setKelvins] = useState(false);
  return (
    <div>
      {Franciss && <Francis close={setFranciss} />}
      {Agadas && <Agada close={setAgadas} />}
      {victors && <Victor close={setVictors} />}
      {sampsons && <Samson close={setSampsons} />}
      {seguns && <Segun close={setSeguns} />}
      {kelvins && <Kelvin close={setKelvins} />}
      <TopHeader />
      <div className={style.top}>
        <div className={style.prodbg}>
          <div className={style.becomeagent}>
            <h2>Enhancing Commerce & Lifestyle Through Payment Innovation</h2>
            <span>
              Payattitude is committed to making delivering innovative solutions
              that make payments easier and more accessible to everyone,
              everywhere.
            </span>
          </div>
          <div className={style.agentt}>
            <Image src={commerce} />
          </div>
        </div>
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
              Leverage our people and partners to securely enhance commerce and
              enable convenience through seamless transactions across multiple
              channels at all times.
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
        <Image src={bord} onClick={() => setFranciss(true)} />
        <Image src={bord1} onClick={() => setAgadas(true)} />
        <Image src={bord2} onClick={() => setVictors(true)} />
        <Image src={bord3} onClick={() => setSampsons(true)} />
        <Image src={bord4} onClick={() => setSeguns(true)} />
        <Image src={bord5} onClick={() => setKelvins(true)} />
      </div>
      <div className={style.secfoot}>
        <span>What are you waiting for?</span>
        <h2>Get your new Payment Digital remote now!!</h2>
        <p>Download the app</p>
        <div className={style.download} style={{ cursor: "pointer" }}>
          <Image
            src={googleplaystore}
            onClick={() =>
              (window.location =
                "https://digital.payattitude.com/completesignup")
            }
          />
          <Image
            src={appstore}
            onClick={() =>
              (window.location =
                "https://itunes.apple.com/ng/app/payattitude-digital/id1343904100?mt=8")
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default company;
