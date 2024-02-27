import TopHeader from "@/component/TopHeader";
import React from "react";
import style from "../../styles/PagesStyle/agent.module.css";
import Image from "next/image";
import { building, gril } from "@/public/IMAGES";
import { appstore, check, googleplaystore } from "@/public/ICON";
import {
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import Footer from "@/component/Footer";
import ListOfMerchant, { merchants } from "@/component/ListOfMerchant";

function agent() {
  <ListOfMerchant />;
  const about = [
    {
      icon: check,
      title: "It creates employment opportunity for people.",
    },
    {
      icon: check,
      title:
        " Takes off stress of travelling far to bank branches on ATM or waiting on long ATM queues",
    },
    {
      icon: check,
      title: "Deposit and withdrawal opportunity outside banking hours",
    },
    {
      icon: check,
      title: " Opportunity to generate income.",
    },
    {
      icon: check,
      title: "Easy on-boarding process",
    },
  ];
  return (
    <div>
      <TopHeader />
      <div className={style.top}>
        <div className={style.prodbg}></div>
        <div className={style.centerdiv}>
          <h2>About Agency Banking</h2>
          <p>
            Agency banking is a cost effective solution designed to provide
            financial access to the banked in locations with
            <br /> very few ATMs/Banks, unbanked and underbanked population.
          </p>
        </div>
        <div className={style.building}>
          <div className={style.buildingimg}>
            <Image src={building} />
          </div>
          <div className={style.content}>
            {about.map((a) => {
              return (
                <div className={style.liam}>
                  <Image src={a.icon} />
                  <p>{a.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* how to become an agent */}
      <div className={style.building2}>
        <div className={style.content}>
          <div className={style.agent}>
            <span>How to become an agent</span>
            <h2>
              Download the Payattitude Digital app and sign up as an agent,
              follow the process below.
            </h2>
          </div>
          {about.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
        </div>
        <div className={style.building2img}>
          <Image src={gril} height={600} width={600} />
        </div>
      </div>
      <h2
        style={{
          color: "#1D2939",
          textAlign: "center",
          lineHeight: "20px",
          fontSize: "30px",
          fontWeight: "500",
          padding: "80px 35px 35px 35px",
        }}
      >
        List of Agents
      </h2>
      {/* Agent table */}
      <div className={style.tablecontent}>
        <div className={style.gridoutside}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>AGENT NAME</th>
                <th>AGENT LOCATION</th>
                <th>STATE</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((m) => {
                return (
                  <tr>
                    <td>{m.no}</td>
                    <td>{m.location}</td>
                    <td>{m.address}</td>
                    <td>{m.state}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={style.row}>
          <span>Showing 1-5 of entries</span>
          <div className={style.pagins}>
            <div className={style.arrow}>
              <button
                style={{ backgroundColor: "#FFF1E5", border: "none" }}
                onClick={() => {}}
              >
                <AiOutlineLeft />
              </button>
              <button
                style={{
                  backgroundColor: "#F58220",
                  border: "none",
                  color: "white",
                }}
              >
                1
              </button>
              <button style={{ backgroundColor: "#FFF1E5", border: "none" }}>
                2
              </button>
              <button style={{ backgroundColor: "#FFF1E5", border: "none" }}>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
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

export default agent;
