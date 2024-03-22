import React, { useState } from "react";
import style from "../styles/components/solutions.module.css";
import Image from "next/image";
import {
  agency,
  atm,
  merchantlocation,
  p2p,
  payattitudemobile,
  pos,
  web,
} from "@/public/IMAGES";
import { useRouter } from "next/router";
function Solutions() {
  const router = useRouter();
  const [payattitude, setPayattitude] = useState(true);
  const [payattitudeCollection, setPayattitudeCollection] = useState(false);
  const [payattitudeCorporate, setPayattitudeCorporate] = useState(false);

  const details = [
    {
      number: 1,
      name: "ATM",
      description:
        "Withdraw cash and transact seamlessly on the ATM with just your phone number",
      image: atm,
    },
    {
      number: 2,
      name: "POS",
      description:
        "Make withdrawals at any POS location using your phone number",
      image: pos,
    },
    {
      number: 3,
      name: "Merchant Location",
      description:
        "Pay conveniently with your phone number at any merchant location",
      image: merchantlocation,
    },
    {
      number: 4,
      name: "Web",
      description:
        "Complete your web transactions with ease, check out with your phone number",
      image: web,
    },
    {
      number: 5,
      name: "Person-2-Person (P2P)",
      description:
        "Send and receive money conveniently using your Phone number",
      image: p2p,
    },
    {
      number: 6,
      name: "Agency",
      description: "Withdraw from any POS agent with just your Phone number.",
      image: agency,
    },
  ];
  return (
    <>
      <div className={style.Solutions}>
        <p>Solutions</p>
        <h3>
          Simple,reliable, and secure payment
          <br /> possibilities – powered by your phone number
        </h3>
        <span>
          Enjoy consistent transaction security, ease, and access to your funds
          with
          <br /> our all-inclusive payment platform built to power your
          lifestyle.
        </span>
      </div>

      <div className={style.top}>
        <div
          style={{ cursor: "pointer" }}
          className={style.container}
          onClick={() => router.push("/products")}
        >
          <div
            className={style.payattitude}
            style={{ borderLeft: payattitude ? "5px solid #F58220" : "" }}
          >
            <p>Payattitude Digital</p>
            <span>
              Our trendy, smart and convenient payment platform enables users
              touse just
              <br /> their phone numbers for transactions at the ATM, web, POS
              and atmerchant
              <br /> locations.
            </span>
          </div>
          <div className={style.payattitude}>
            <p>Payattitude Digital Collection Solution</p>
            <span>
              Simplified collection solution for contributions, dues and
              offerings; get anyone
              <br /> to pay you easily, using their phone number.
            </span>
          </div>
          <div className={style.payattitude}>
            <p>Payattitude Corporate</p>
            <span>
              End-to-end secure and convenient payment solution that enables
              corporates to
              <br /> extend their services to, and get paid by the unbanked.
            </span>
          </div>
        </div>
        <Image src={payattitudemobile} />
      </div>

      {/* How it works  */}

      <div className={style.Solutions}>
        <p>How It Works</p>
        <h3>
          Bringing financial services closer
          <br /> to you via USSD and mobile app
        </h3>
        <span>
          Payattitude empowers person to person operations with just
          <br /> phone number, via USSD and mobile app.
        </span>
      </div>

      <div className={style.ussd}>
        {details.map((d) => {
          return (
            <div className={style.shadow}>
              <div className={style.providerimg}>
                <Image src={d?.image} priority />
              </div>
              <span>{d?.number}</span>
              <h3>{d?.name}</h3>
              <p>{d?.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Solutions;
