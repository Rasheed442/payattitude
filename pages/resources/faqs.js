import TopHeader from "@/component/TopHeader";
import React from "react";
import style from "../../styles/PagesStyle/faq.module.css";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
// import { Faqquestions } from "../faqQuestion";
import Image from "next/image";
import { group2 } from "@/public/ICON";
import Footer from "@/component/Footer";
function faqs() {
  return (
    <div>
      <TopHeader />
      <div className={style.top}>
        <div className={style.prodbg}></div>
      </div>
      <div className={style.frq}>
        <h2>Frequently asked questions</h2>
        <span>Everything you need to know about the payattitude</span>
        <div className={style.search}>
          <AiOutlineSearch size={23} style={{ color: "#47546780" }} />
          <input placeholder="Search" />
        </div>
      </div>

      {/* <div className={style.quest}>
        {Faqquestions.map((f) => {
          return (
            <div className={style.content}>
              <p>{f.title}</p>
              <span>{f.icon}</span>
            </div>
          );
        })}
      </div> */}
      <div className={style.semifooter}>
        <Image src={group2} />
        <span>Still have questions</span>
        <p>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button>Get in touch</button>
      </div>
      <Footer />
    </div>
  );
}

export default faqs;
