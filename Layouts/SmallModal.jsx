import React from "react";
import style from "../styles/Layout/smallModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
function SmallModal({ children, onClick, content }) {
  return (
    <div className={style.container}>
      <div className={style.center}>
        <div className={style.close} onClick={onClick}>
          <span></span>
          <p>{content}</p>
          <AiOutlineClose
            size={16}
            style={{ width: "20%", cursor: "pointer" }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default SmallModal;
