import React, { useState, useEffect } from "react";
import style from "../styles/components/mainpage.module.css";
import Image from "next/image";
import {
  bankmanage,
  imagecaro1,
  imagecaro2,
  imagecaro3,
} from "@/public/IMAGES";
import { appstore, googleplaystore, group } from "@/public/ICON";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// modeule for swiperjs
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

function MainPage() {
  const [backgroundIndex, setbackgroundIndex] = useState(0);

  const backgrounds = [bankmanage, imagecaro1, imagecaro2, imagecaro3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setbackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* first carousel page  */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={false}
        // pagination={{
        //   clickable: true,
        // }}
        effect={"fade"}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className={style.swiper}
      >
        <SwiperSlide>
          <div className={style.carousel1}>
            <div className={style.content}>
              <h2>Manage all your bank account from one secure app</h2>
              <span>
                One secure platform to pay, get paid and manage
                <br /> your finance better and with ease
              </span>

              <div className={style.group}>
                <div className={style.stores}>
                  <Image
                    src={googleplaystore}
                    priority
                    onClick={() =>
                      (window.location =
                        "https://digital.payattitude.com/completesignup")
                    }
                  />
                  <Image
                    src={appstore}
                    priority
                    onClick={() =>
                      (window.location =
                        "https://itunes.apple.com/ng/app/payattitude-digital/id1343904100?mt=8")
                    }
                  />
                </div>
                <div className={style.downloads}>
                  <Image src={group} priority />
                  <span>Over 1k+ downloads</span>
                </div>
              </div>
            </div>
            <Image src={bankmanage} priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.carousel1}>
            <div className={style.content}>
              <h2>Paying bills and shop with just your phone number</h2>
              <span>
                One secure platform to pay, get paid and manage
                <br /> your finance better and with ease
              </span>

              <div className={style.group}>
                <div className={style.stores}>
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
                <div className={style.downloads}>
                  <Image src={group} priority />
                  <span>Over 1k+ downloads</span>
                </div>
              </div>
            </div>
            <Image src={imagecaro2} priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.carousel1}>
            <div className={style.content}>
              <h2>
                Get on the smart side of <br />
                transacting with Payattitude
              </h2>
              <span>
                One secure platform to pay, get paid and manage
                <br /> your finance better and with ease
              </span>

              <div className={style.group}>
                <div className={style.stores}>
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
                <div className={style.downloads}>
                  <Image src={group} priority />
                  <span>Over 1k+ downloads</span>
                </div>
              </div>
            </div>
            <Image src={imagecaro1} priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.carousel1}>
            <div className={style.content}>
              <h2>
                Withdraw cash with just
                <br /> your phone number
              </h2>
              <span>
                One secure platform to pay, get paid and manage
                <br /> your finance better and with ease
              </span>

              <div className={style.group}>
                <div className={style.stores}>
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
                <div className={style.downloads}>
                  <Image src={group} priority />
                  <span>Over 1k+ downloads</span>
                </div>
              </div>
            </div>
            <Image src={imagecaro3} priority />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* second page carousel */}
      {/* <AnimatePresence>
        {backgroundIndex == 1 && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            className={style.carousel1}
          >
            <div className={style.content}>
              <h2>
                Paying bills and shop with
                <br /> just your phone number
              </h2>
              <span>
                One secure platform to pay, get paid and manage
                <br /> your finance better and with ease
              </span>

              <div className={style.group}>
                <div className={style.stores}>
                  <Image src={googleplaystore} />
                  <Image src={appstore} />
                </div>
                <div className={style.downloads}>
                  <Image src={group} priority />
                  <span>Over 1k+ downloads</span>
                </div>
              </div>
            </div>
            <Image src={imagecaro2} priority />
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* second page carousel */}
      {/* {backgroundIndex == 2 && (
        <div className={style.carousel1}>
          <div className={style.content}>
            <h2>
              Get on the smart side of <br />
              transacting with Payattitude
            </h2>
            <span>
              One secure platform to pay, get paid and manage
              <br /> your finance better and with ease
            </span>

            <div className={style.group}>
              <div className={style.stores}>
                <Image src={googleplaystore} />
                <Image src={appstore} />
              </div>
              <div className={style.downloads}>
                <Image src={group} priority />
                <span>Over 1k+ downloads</span>
              </div>
            </div>
          </div>
          <Image src={imagecaro1} priority />
        </div>
      )} */}
      {/* second page carousel */}
      {/* {backgroundIndex == 3 && (
        <div className={style.carousel1}>
          <div className={style.content}>
            <h2>
              Withdraw cash with just
              <br /> your phone number
            </h2>
            <span>
              One secure platform to pay, get paid and manage
              <br /> your finance better and with ease
            </span>

            <div className={style.group}>
              <div className={style.stores}>
                <Image src={googleplaystore} />
                <Image src={appstore} />
              </div>
              <div className={style.downloads}>
                <Image src={group} priority />
                <span>Over 1k+ downloads</span>
              </div>
            </div>
          </div>
          <Image src={imagecaro3} priority />
        </div>
      )} */}
    </>
  );
}

export default MainPage;
