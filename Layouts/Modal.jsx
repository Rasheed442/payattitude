import React from "react";
import style from "../styles/Layout/modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
function Modal({ children, onClick }) {
  return (
    <div className={style.container}>
      <div className={style.center}>
        <div className={style.close} onClick={onClick}>
          <AiOutlineClose size={25} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
