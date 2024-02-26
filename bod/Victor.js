import React from "react";
import style from "../styles/bod/bod.module.css";
import Modal from "@/Layouts/Modal";
import { bord2 } from "@/public/IMAGES";
import Image from "next/image";
function Victor({ close }) {
  return (
    <Modal onClick={() => close(false)}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Victor Etuokwu is an Executive Director of Access Bank Plc and
              represents the bank on the board of PayAttitude Global Limited. He
              has about 20 years banking experience cutting across banking
              operations and information technology, internal control, general
              administration, retail banking, business acquisition and
              integration.
            </p>
          </div>
          <div className={style.content}>
            <p>
              He joined Access Bank in July 2003 from Citibank Nigeria and was
              promoted to General Manager in February 2008. He has served the
              Bank in different capacities, leading several successful and
            </p>
          </div>
        </div>
        <Image src={bord2} />
      </div>
    </Modal>
  );
}

export default Victor;
