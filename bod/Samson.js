import React from "react";
import style from "../styles/bod/bod.module.css";
import Modal from "@/Layouts/Modal";
import { bord3 } from "@/public/IMAGES";
import Image from "next/image";
function Samson({ close }) {
  return (
    <Modal onClick={() => close(false)}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.content}>
            <p>
              Sampson Aneke represents United Bank for Africa on the Board of
              Payattitude Global Ltd. He is currently a Group General Manager
              (GGM) in United Bank for Africa (UBA) Group in charge of Retail,
              Transaction & Digital Banking Group. Sampson has held several
              Executive Functions in UBA some of which are as follows:
              Directorate Head, South Bank spanning over 17 States of the
              Federation and housing over 313 Branches. Head SME Banking in 20
              UBA present countries, double-hatted as Group Head, Digital
              Banking and Bank Head (BH), Apapa 2 Region. A highly motivated and
              experienced professional with strong business development skills
              and financial knowledge, anchored on extensive hands-on experience
              in Customer Centrism, deep understanding of banking industry
              dynamics, strong digital background, excellent negotiation and
              cost management skills. Sampson has put up over two decades of
              Banking experience which spanned across three banks, Ecobank,
              Access Bank (formerly Diamond Bank) and United Bank for Africa
              (UBA). He has spent over 15 years in Senior Management Levels. He
              holds a B.Sc. degree in Banking and Finance, MBA in Business
              Administration & Management. He is a Fellow of the Chartered
              Institute of Bankers of Nigeria where he qualified after passing
              the Institutes examinations with Distinction in Accounting. He is
              also a Fellow of the Nigerian Institute of Management and an
              Alumnus of the prestigious Lagos Business School. He has attended
              various local and foreign courses.
            </p>
          </div>
        </div>
        <Image src={bord3} priority />
      </div>
    </Modal>
  );
}

export default Samson;
