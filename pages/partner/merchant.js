import React from "react";
import style from "../../styles/PagesStyle/merchant.module.css";
import TopHeader from "@/component/TopHeader";
import { gril, payattitudemobile } from "@/public/IMAGES";
import Image from "next/image";
import { appstore, check, googleplaystore, payattitude } from "@/public/ICON";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Footer from "@/component/Footer";
import ListOfMerchant, { merchants } from "@/component/ListOfMerchant";
function merchant() {
  <ListOfMerchant />;
  const about = [
    {
      icon: check,
      title: "Step 1 - Log into the app",
    },
    {
      icon: check,
      title: "Step 2 - Click on the account to transact with",
    },
    {
      icon: check,
      title: "Step 3 – Select request transfer/payment",
    },
    {
      icon: check,
      title: "Step 4 – Enter amount and enter description",
    },
    {
      icon: check,
      title:
        "Step 5-Click add payer to enter phone no of the sender or click on the profile icon to load your contact list and send request",
    },
  ];
  const approve = [
    {
      icon: check,
      title: "A notification message is sent to the payer",
    },
    {
      icon: check,
      title: "Step 1 - Tap on notification",
    },
    {
      icon: check,
      title: "Step 2 - Select account to debit",
    },
    {
      icon: check,
      title: "Step 3 – Enter PIN and approve",
    },
    {
      icon: check,
      title: "Receipt is printed out (if holder approves transaction)",
    },
  ];
  const pos = [
    {
      icon: check,
      title: "Step 1 -Select Payattitude",
    },
    {
      icon: check,
      title: "Step 2 - Select account type",
    },
    {
      icon: check,
      title: "Step 3 – Input amount and phone number linked to account",
    },
    {
      icon: check,
      title: "Notification is sent to holder’s phone Number",
    },
  ];
  const terminal = [
    {
      icon: check,
      title: "Step 1 - Log into the portal",
    },
    {
      icon: check,
      title: "Step 2 - Input phone number and amount",
    },
    {
      icon: check,
      title: "Step 3 – Input description (Optional)",
    },
    {
      icon: check,
      title: "Step 4 – Click on submit",
    },
  ];
  return (
    <div>
      <TopHeader />
      <div className={style.top}>
        <div className={style.prodbg}></div>
        <div className={style.centerdiv}>
          <h2>Use your mobile Phone as POS</h2>

          <p>
            Businesses that cannot afford to incur additional costs of POS have
            the opportunity to use their mobile
            <br />
            phones as POS with Payattitude Digital app installed on their
            devices, Your phone becomes your POS where they can <br />
            send payment requests to customers and your customers in turn get
            notified and approve payment immediately.
          </p>
        </div>
      </div>
      <div className={style.building2}>
        <div className={style.building2img}>
          <Image src={payattitudemobile} height={600} width={600} />
        </div>
        <div className={style.content}>
          <div className={style.agent}>
            <span>How to receive payment on Mobile phone </span>
          </div>
          {about.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
          <div className={style.agent}>
            <span>How to approve payment on POS terminal</span>
          </div>
          {approve.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style.centerdiv}>
        <h2>Payment on POS with just phone number</h2>
        <p>
          Merchants will be able to receive payments by entering customers’
          phone number with amount on POS and
          <br /> customer/payer receives a notification on his/her mobile phone
          for prompt authorization. Upon authorization, POS
          <br /> displays an approved message.
        </p>
      </div>

      <div className={style.building2}>
        <div className={style.content}>
          <div className={style.agent}>
            <span>How to make payment on POS terminal</span>
          </div>
          {pos.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
          <div className={style.agent}>
            <span>How to approve payment on POS terminal</span>
          </div>
          {approve.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
        </div>
        <div className={style.building2img}>
          <Image src={payattitudemobile} height={600} width={600} />
        </div>
      </div>
      <div className={style.centerdiv}>
        <h2>Payment on cash register with just phone number</h2>
        <p>
          Merchants can now be set up remotely and the merchant can log-in from
          the cashier's work station or personal
          <br /> devices to accept payment from customers. Merchant or payee
          enters buyer or payer's phone number on the cash
          <br /> register or work station and the buyer or payer is prompted on
          her/his own device to approve or decline. Customer
          <br /> approves payment and successful transaction message is
          displayed on the cash register.
        </p>
      </div>
      <div className={style.building2}>
        <div className={style.building2img}>
          <Image src={payattitudemobile} height={600} width={600} />
        </div>
        <div className={style.content}>
          <div className={style.agent}>
            <span>How to receive payment on cash register </span>
          </div>
          {about.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
          <div className={style.agent}>
            <span>How to approve payment on POS terminal</span>
          </div>
          {approve.map((a) => {
            return (
              <div className={style.liam}>
                <Image src={a.icon} />
                <p>{a.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h2
        style={{
          color: "#1D2939",
          textAlign: "center",
          lineHeight: "20px",
          fontSize: "30px",
          fontWeight: "500",
          padding: "80px 35px 35px 35px",
        }}
      >
        List of Merchant
      </h2>

      {/* merchnat table */}
      <div className={style.tablecontent}>
        <div className={style.gridoutside}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>MERCHANT NAME</th>
                <th>MERCHANT LOCATION</th>
                <th>STATE</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((m) => {
                return (
                  <tr>
                    <td>{m.no}</td>
                    <td>{m.location}</td>
                    <td>{m.address}</td>
                    <td>{m.state}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={style.row}>
          <span>Showing 1-5 of entries</span>
          <div className={style.pagins}>
            <div className={style.arrow}>
              <button
                style={{ backgroundColor: "#FFF1E5", border: "none" }}
                onClick={() => {}}
              >
                <AiOutlineLeft />
              </button>
              <button
                style={{
                  backgroundColor: "#F58220",
                  border: "none",
                  color: "white",
                }}
              >
                1
              </button>
              <button style={{ backgroundColor: "#FFF1E5", border: "none" }}>
                2
              </button>
              <button style={{ backgroundColor: "#FFF1E5", border: "none" }}>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.secfoot}>
        <span>What are you waiting for?</span>
        <h2>Get your new Payment Digital remote now!!</h2>
        <p>Download the app</p>
        <div className={style.download} style={{ cursor: "pointer" }}>
          <Image
            src={googleplaystore}
            onClick={() =>
              (window.location =
                "https://digital.payattitude.com/completesignup")
            }
          />
          <Image
            src={appstore}
            onClick={() =>
              (window.location =
                "https://itunes.apple.com/ng/app/payattitude-digital/id1343904100?mt=8")
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default merchant;
