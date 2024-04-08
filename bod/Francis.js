import React from "react";
import style from "../styles/bod/bod.module.css";
import Modal from "@/Layouts/Modal";
import { bord } from "@/public/IMAGES";
import Image from "next/image";
function Francis({ close }) {
  return (
    <Modal onClick={() => close(false)}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Mr. Francis Olugbenga Shobo, FCA, the Chairman of Payatitude
              Global is also the Deputy Managing Director of First Bank of
              Nigeria Limited (the Bank).
            </p>
          </div>
          <div className={style.content}>
            <p>
              He joined the Board of the Bank in 2012. Prior to his appointment
              as Deputy Managing Director, he was the Executive Director
              overseeing the Retail Banking/Public Sector businesses in the
              Lagos & West Directorate and was hitherto the Executive Director
              overseeing the Retail Business in the South Directorate.
            </p>
          </div>
        </div>
        <Image src={bord} priority />
      </div>
    </Modal>
  );
}

export default Francis;
