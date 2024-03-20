import TopHeader from "@/component/TopHeader";
import React, { useState, useEffect } from "react";
import style from "../styles/PagesStyle/product.module.css";
import Lottie from "lottie-react";
import {
  caro1,
  caro2,
  caro3,
  flow1,
  flow2,
  flow3,
  flow5,
  prod,
} from "@/public/IMAGES";
import Image from "next/image";
import { appstore, googleplaystore } from "@/public/ICON";
import Footer from "@/component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
function products() {
  const [digital, setDigital] = useState(true);
  const [corporate, setCorporate] = useState(false);
  const [solution, setSolution] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const details = [
    {
      name: "Secure Payment",
      icon: flow5,
      desc: `Payattitude ensure safe secure and convenience payment`,
    },
    {
      name: "Dedicated Support",
      icon: flow3,
      desc: "Get help from our team of experts",
    },
    {
      name: "Privacy",
      icon: flow2,
      desc: "We ensure safe and protection of your details",
    },
  ];
  return (
    <div>
      <TopHeader />
      <div className={style.prodbg}>
        <div className={style.innovatives}>
          <h2>Building an innovative solution for everyone</h2>
          <span>Explore all our products</span>
        </div>
        <div className={style.agentt}>
          <Image src={prod} priority />
        </div>
      </div>
      <div className={style.grid}>
        {details.map((d) => {
          return (
            <div className={style.content}>
              <Lottie
                animationData={d.icon}
                style={{ width: "170px", height: "70px" }}
              />
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          );
        })}
      </div>

      {digital && (
        <div className={style.caro}>
          <div className={style.corporate}>
            <h2 data-aos="fade-up">
              Payattitude
              <br />
              Digital
            </h2>
            <div className={style.btn}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  rx="10"
                  transform="matrix(-1 0 0 1 48 0)"
                  fill="#FFF1E5"
                />
                <path
                  d="M26.4396 33.3334C26.2404 33.3341 26.0436 33.2901 25.8636 33.2047C25.6836 33.1193 25.5251 32.9947 25.3996 32.84L18.9596 24.84C18.7635 24.6015 18.6562 24.3022 18.6562 23.9934C18.6562 23.6845 18.7635 23.3853 18.9596 23.1467L25.6262 15.1467C25.8526 14.8744 26.1778 14.7032 26.5303 14.6707C26.8829 14.6382 27.2339 14.7471 27.5062 14.9734C27.7785 15.1997 27.9498 15.5249 27.9823 15.8775C28.0148 16.23 27.9059 16.5811 27.6796 16.8534L21.7196 24L27.4796 31.1467C27.6426 31.3424 27.7462 31.5807 27.778 31.8335C27.8099 32.0862 27.7686 32.3428 27.6592 32.5728C27.5498 32.8028 27.3768 32.9967 27.1607 33.1315C26.9445 33.2663 26.6943 33.3363 26.4396 33.3334Z"
                  fill="#F58220"
                />
              </svg>
              <svg
                onClick={() => {
                  setSolution(true);
                  setDigital(false);
                  setCorporate(false);
                }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="10" fill="#FFF1E5" />
                <path
                  d="M21.5604 33.3334C21.7596 33.3341 21.9564 33.2901 22.1364 33.2047C22.3164 33.1193 22.4749 32.9947 22.6004 32.84L29.0404 24.84C29.2365 24.6015 29.3438 24.3022 29.3438 23.9934C29.3438 23.6845 29.2365 23.3853 29.0404 23.1467L22.3738 15.1467C22.1474 14.8744 21.8222 14.7032 21.4697 14.6707C21.1171 14.6382 20.7661 14.7471 20.4938 14.9734C20.2215 15.1997 20.0502 15.5249 20.0177 15.8775C19.9852 16.23 20.0941 16.5811 20.3204 16.8534L26.2804 24L20.5204 31.1467C20.3574 31.3424 20.2538 31.5807 20.222 31.8335C20.1901 32.0862 20.2314 32.3428 20.3408 32.5728C20.4502 32.8028 20.6232 32.9967 20.8393 33.1315C21.0555 33.2663 21.3057 33.3363 21.5604 33.3334Z"
                  fill="#F58220"
                />
              </svg>
            </div>
          </div>
          <div className={style.slidersimg}>
            <Image src={caro1} priority />
          </div>
        </div>
      )}
      {solution && (
        <div className={style.caro}>
          <div className={style.corporate}>
            <h2 data-aos="fade-up">
              Payattitude
              <br />
              Digital Collection
              <br />
              solution
            </h2>
            <div className={style.btn}>
              <svg
                onClick={() => {
                  setSolution(false);
                  setDigital(true);
                  setCorporate(false);
                }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  rx="10"
                  transform="matrix(-1 0 0 1 48 0)"
                  fill="#FFF1E5"
                />
                <path
                  d="M26.4396 33.3334C26.2404 33.3341 26.0436 33.2901 25.8636 33.2047C25.6836 33.1193 25.5251 32.9947 25.3996 32.84L18.9596 24.84C18.7635 24.6015 18.6562 24.3022 18.6562 23.9934C18.6562 23.6845 18.7635 23.3853 18.9596 23.1467L25.6262 15.1467C25.8526 14.8744 26.1778 14.7032 26.5303 14.6707C26.8829 14.6382 27.2339 14.7471 27.5062 14.9734C27.7785 15.1997 27.9498 15.5249 27.9823 15.8775C28.0148 16.23 27.9059 16.5811 27.6796 16.8534L21.7196 24L27.4796 31.1467C27.6426 31.3424 27.7462 31.5807 27.778 31.8335C27.8099 32.0862 27.7686 32.3428 27.6592 32.5728C27.5498 32.8028 27.3768 32.9967 27.1607 33.1315C26.9445 33.2663 26.6943 33.3363 26.4396 33.3334Z"
                  fill="#F58220"
                />
              </svg>
              <svg
                onClick={() => {
                  setSolution(false);
                  setDigital(false);
                  setCorporate(true);
                }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="10" fill="#FFF1E5" />
                <path
                  d="M21.5604 33.3334C21.7596 33.3341 21.9564 33.2901 22.1364 33.2047C22.3164 33.1193 22.4749 32.9947 22.6004 32.84L29.0404 24.84C29.2365 24.6015 29.3438 24.3022 29.3438 23.9934C29.3438 23.6845 29.2365 23.3853 29.0404 23.1467L22.3738 15.1467C22.1474 14.8744 21.8222 14.7032 21.4697 14.6707C21.1171 14.6382 20.7661 14.7471 20.4938 14.9734C20.2215 15.1997 20.0502 15.5249 20.0177 15.8775C19.9852 16.23 20.0941 16.5811 20.3204 16.8534L26.2804 24L20.5204 31.1467C20.3574 31.3424 20.2538 31.5807 20.222 31.8335C20.1901 32.0862 20.2314 32.3428 20.3408 32.5728C20.4502 32.8028 20.6232 32.9967 20.8393 33.1315C21.0555 33.2663 21.3057 33.3363 21.5604 33.3334Z"
                  fill="#F58220"
                />
              </svg>
            </div>
          </div>
          <div className={style.slidersimg}>
            <Image src={caro2} priority data-aos="slide-left" />
          </div>
        </div>
      )}
      {corporate && (
        <div className={style.caro}>
          <div className={style.corporate}>
            <h2 data-aos="fade-up">
              Payattitude
              <br />
              Corporate
            </h2>
            <div className={style.btn}>
              <svg
                onClick={() => {
                  setSolution(true);
                  setDigital(false);
                  setCorporate(false);
                }}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  rx="10"
                  transform="matrix(-1 0 0 1 48 0)"
                  fill="#FFF1E5"
                />
                <path
                  d="M26.4396 33.3334C26.2404 33.3341 26.0436 33.2901 25.8636 33.2047C25.6836 33.1193 25.5251 32.9947 25.3996 32.84L18.9596 24.84C18.7635 24.6015 18.6562 24.3022 18.6562 23.9934C18.6562 23.6845 18.7635 23.3853 18.9596 23.1467L25.6262 15.1467C25.8526 14.8744 26.1778 14.7032 26.5303 14.6707C26.8829 14.6382 27.2339 14.7471 27.5062 14.9734C27.7785 15.1997 27.9498 15.5249 27.9823 15.8775C28.0148 16.23 27.9059 16.5811 27.6796 16.8534L21.7196 24L27.4796 31.1467C27.6426 31.3424 27.7462 31.5807 27.778 31.8335C27.8099 32.0862 27.7686 32.3428 27.6592 32.5728C27.5498 32.8028 27.3768 32.9967 27.1607 33.1315C26.9445 33.2663 26.6943 33.3363 26.4396 33.3334Z"
                  fill="#F58220"
                />
              </svg>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" rx="10" fill="#FFF1E5" />
                <path
                  d="M21.5604 33.3334C21.7596 33.3341 21.9564 33.2901 22.1364 33.2047C22.3164 33.1193 22.4749 32.9947 22.6004 32.84L29.0404 24.84C29.2365 24.6015 29.3438 24.3022 29.3438 23.9934C29.3438 23.6845 29.2365 23.3853 29.0404 23.1467L22.3738 15.1467C22.1474 14.8744 21.8222 14.7032 21.4697 14.6707C21.1171 14.6382 20.7661 14.7471 20.4938 14.9734C20.2215 15.1997 20.0502 15.5249 20.0177 15.8775C19.9852 16.23 20.0941 16.5811 20.3204 16.8534L26.2804 24L20.5204 31.1467C20.3574 31.3424 20.2538 31.5807 20.222 31.8335C20.1901 32.0862 20.2314 32.3428 20.3408 32.5728C20.4502 32.8028 20.6232 32.9967 20.8393 33.1315C21.0555 33.2663 21.3057 33.3363 21.5604 33.3334Z"
                  fill="#F58220"
                />
              </svg>
            </div>
          </div>
          <div className={style.slidersimg}>
            <Image src={caro3} priority data-aos="slide-left" />
          </div>
        </div>
      )}

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

export default products;
