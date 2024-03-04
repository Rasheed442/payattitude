import TopHeader from "@/component/TopHeader";
import React, { useState } from "react";
import style from "../styles/PagesStyle/contact.module.css";
import { flow1, flow2, flow3 } from "@/public/IMAGES";
import Lottie from "lottie-react";
import Image from "next/image";
import { contacts, doccontact } from "@/public/ICON";
import Footer from "@/component/Footer";
function contact() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [message, setMessage] = useState();
  const details = [
    {
      icon: flow1,
      name: "Address",
      title: "3,Idowu Taylor street, Victoria Island, Lagos, Nigeria",
    },
    {
      icon: flow2,
      name: "Phone Numbers",
      title:
        "020-1-22728700700-Payattitude (070072928848833)+234 902 068 2250(Whatsapp)",
    },
    {
      icon: flow3,
      name: "Email",
      title: "customerservice@payattitude.com",
    },
  ];
  function SubmitHandler(e) {
    e.preventDefault();
    const subject = `Hello ${firstname} ${lastname}`;
    const body = `${firstname} ${lastname},\n${email}\n${message}\n${phonenumber}`;

    // Construct the mailto link
    const mailtoLink = `mailto:${encodeURIComponent(
      "customerservice@payattitude.com"
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;

    console.log(mailtoLink);
  }
  return (
    <div>
      <TopHeader />
      <div className={style.top}>
        <div className={style.prodbg}>
          <div className={style.becomeagent}>
            <p>Contact Us</p>
            <h2>Let Us hear from you</h2>
            <span>We are here to fully help you</span>
          </div>
          <div className={style.agentt}>
            <Image src={contacts} priority />
          </div>
        </div>
      </div>

      <div className={style.center}>
        <span>Get Help and Support</span>
        <h2>
          If you have a specific service or question in mind, please
          <br />
          don’t hesitate to contact us
        </h2>
        <p>Reach out to us via the following channels</p>
      </div>

      <div className={style.grid}>
        {details.map((d) => {
          return (
            <div className={style.lots}>
              <Lottie
                animationData={d?.icon}
                style={{ width: "170px", height: "70px" }}
              />
              <p>{d?.name}</p>
              <span>{d?.title}</span>
            </div>
          );
        })}
      </div>

      <div className={style.contactus}>
        <Image src={doccontact} priority />
        <div className={style.main}>
          <div className={style.contacheader}>
            <span>Contact us</span>
            <h2>Send us a message</h2>
            <p>Our friendly team would love to here from you</p>
          </div>
          <div className={style.name}>
            <div className={style.namelabel}>
              <label>First name</label>
              <input
                type="text"
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={style.namelabel}>
              <label>Last name</label>
              <input
                type="text"
                placeholder="last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className={style.emailabel}>
            <label>Email</label>
            <input
              type="text"
              placeholder="you@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.emailabel}>
            <label>Phonenumber</label>
            <input
              type="text"
              placeholder="+2349127805456"
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div className={style.msglabel}>
            <label>message</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={style.checkbox}>
            {/* <input type="checkbox" /> */}
            <p>
              {/* You agree to our friendly <span>privacy policy</span>{" "} */}
            </p>
          </div>
          <button onClick={SubmitHandler}>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
