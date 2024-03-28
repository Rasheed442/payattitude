import LabelinputLayout from "@/Layouts/LabelinputLayout";
import SmallModal from "@/Layouts/SmallModal";
import React from "react";
import style from "../styles/components/creatagent.module.css";
function CreateAgent({ close }) {
  return (
    <SmallModal onClick={() => close(false)} content="Become an Agent">
      <LabelinputLayout
        label="First Name"
        placeholder="Enter your first name"
      />
      <LabelinputLayout label="Last Name" placeholder="Enter your last name" />
      <LabelinputLayout label="Email" placeholder="Enter your email address" />
      <LabelinputLayout label="Address" placeholder="Enter your home address" />
      <div className={style.role}>
        <label>State</label>
        <div className={style.select}>
          <select>
            <option>Choose State</option>
          </select>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={style.btn}>
        <button>Submit</button>
      </div>
    </SmallModal>
  );
}

export default CreateAgent;
