import React from "react";
import style from "../styles/bod/bod.module.css";
import Modal from "@/Layouts/Modal";
import { bord3, bord4, bord5 } from "@/public/IMAGES";
import Image from "next/image";
function Kelvin({ close }) {
  return (
    <Modal onClick={() => close(false)}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Kevin Ugwuoke is an Executive Director of Fidelity Bank Plc and
              represents the Bank on the Board of Directors of PayAttitude
              Global Ltd. He was appointed Executive Director, Risk Management /
              Chief Risk Officer in July 2020. He previously served as the
              General Manager, Chief Risk Officer and he is currently
              responsible for Credit Risk Management, Credit Strategy & Policy,
              Risk Measurement, IT Risk Management, Operational Risk Management,
              and Compliance.
            </p>
          </div>
          <div className={style.content}>
            <p>
              He joined Fidelity Bank in March 2015 as General Manager. Prior
            </p>
          </div>
        </div>
        <Image src={bord5} priority />
      </div>
    </Modal>
  );
}

export default Kelvin;
