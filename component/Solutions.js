import React, { useState, useEffect } from "react";
import style from "../styles/components/solutions.module.css";
import Image from "next/image";
import {
  agency,
  atm,
  corp,
  digital,
  dta,
  merchantlocation,
  p2p,
  payattitudemobile,
  pos,
  web,
} from "@/public/IMAGES";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
function Solutions() {
  const router = useRouter();
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
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
      image: dta,
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
        <div className={style.container}>
          <div
            className={style.payattitude}
            data-aos="slide-up"
            onClick={() => {
              setPayattitudeCorporate(false);
              setPayattitude(true);
              setPayattitudeCollection(false);
            }}
          >
            <div className={style.hover}>
              <p>Payattitude Digital</p>
              <span>
                Our trendy, smart and convenient payment platform enables users
                to use just
                <br /> their phone numbers for transactions at the ATM, web, POS
                and atmerchant
                <br /> locations.
              </span>
              <button onClick={() => router.push("/products")}>
                view more
              </button>
            </div>
          </div>
          <div
            className={style.payattitude}
            data-aos="slide-up"
            onClick={() => {
              setPayattitudeCorporate(false);
              setPayattitude(false);
              setPayattitudeCollection(true);
            }}
          >
            <div className={style.hover}>
              <p>Payattitude Digital Collection Solution</p>
              <span>
                Simplified collection solution for contributions, dues and
                offerings; get anyone
                <br /> to pay you easily, using their phone number.
              </span>
              <button onClick={() => router.push("/products")}>
                view more
              </button>
            </div>
          </div>
          <div
            className={style.payattitude}
            data-aos="slide-up"
            onClick={() => {
              setPayattitudeCorporate(true);
              setPayattitude(false);
              setPayattitudeCollection(false);
            }}
          >
            <div className={style.hover}>
              <p>Payattitude Corporate</p>
              <span>
                End-to-end secure and convenient payment solution that enables
                corporates to
                <br /> extend their services to, and get paid by the unbanked.
              </span>
              <button onClick={() => router.push("/products")}>
                view more
              </button>
            </div>
          </div>
        </div>
        {payattitude && (
          <Image src={payattitudemobile} data-aos="slide-up" priority />
        )}
        {payattitudeCollection && (
          <Image src={digital} data-aos="slide-up" priority />
        )}
        {payattitudeCorporate && (
          <Image src={corp} data-aos="slide-up" priority />
        )}
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

      <div className={style.ussd} data-aos="zoom-in">
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
