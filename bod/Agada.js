import React from "react";
import style from "../styles/bod/bod.module.css";
import Modal from "@/Layouts/Modal";
import { bord1 } from "@/public/IMAGES";
import Image from "next/image";
function Agada({ close }) {
  return (
    <Modal onClick={() => close(false)}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Agada Apochi is an Organizational Psychologist & Change
              <br /> Leadership Specialist and also a Practitioner-Scholar in
              diffusion
              <br /> of innovation and digital financial services. He has over
              30 years
              <br /> of professional experience in banking and financial
              technology.
              <br /> Agada is the Founder/Director of Payattitude.
            </p>
          </div>
          <div className={style.content}>
            <p>
              Agada is the Managing Director & CEO of Nigeria’s premier
              <br />
              financial technology company, UP (Unified Payments), which is a
              <br />
              group of companies with services including Banking, Payment
              <br />
              Scheme, Financial Technology, Digital Commerce, Value Added
              <br />
            </p>
          </div>
        </div>
        <Image src={bord1} />
      </div>
    </Modal>
  );
}

export default Agada;
