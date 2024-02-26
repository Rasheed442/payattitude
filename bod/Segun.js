import React from "react";
import style from "../styles/bod/bod.module.css";
import Modal from "@/Layouts/Modal";
import { bord3, bord4 } from "@/public/IMAGES";
import Image from "next/image";
function Segun({ close }) {
  return (
    <Modal onClick={() => close(false)}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Segun Opeke is an Executive Director of Polaris Bank Ltd and
              represents the Bank on the Board of Director of PayAttitude Global
              Ltd. He has over twenty-six years of hands-on work experience
              acquired from leading Nigerian commercial banks with more than
              fifteen years in Senior and Executive Management roles.
            </p>
          </div>
          <div className={style.content}>
            <p>
              Before becoming an Executive Director, Mr. Opeke was the
              Directorate Head, Lagos Business. The Lagos Directorate, under his
              leadership, recorded outstanding growth and contributed
            </p>
          </div>
        </div>
        <Image src={bord4} />
      </div>
    </Modal>
  );
}

export default Segun;
