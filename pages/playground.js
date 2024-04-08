import Modal from "@/Layouts/Modal";
import React from "react";
import Image from "next/image";
import { bord } from "@/public/IMAGES";
import style from "../styles/Home.module.css";
function playground() {
  return (
    <Modal>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Mr. Francis Olugbenga Shobo, FCA, the Chairman of Payatitude
              <br />
              Global is also the Deputy Managing Director of First Bank of
              <br />
              Nigeria Limited (the Bank).
            </p>
          </div>
          <div className={style.content}>
            <p>
              He joined the Board of the Bank in 2012. Prior to his appointment
              <br />
              as Deputy Managing Director, he was the Executive Director
              <br />
              overseeing the Retail Banking/Public Sector businesses in the
              <br />
              Lagos & West Directorate and was hitherto the Executive Director
              <br />
              overseeing the Retail Business in the South Directorate.
            </p>
          </div>
        </div>
        <Image src={bord} priority />
      </div>
    </Modal>
  );
}

export default playground;
