import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import style from "../styles/playground.module.css";
import { flow1, flow2, imagecaro1, imagecaro2 } from "@/public/IMAGES";
import Image from "next/image";
function playground() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className={style.swiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      {/* <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        navigation={false}
        // pagination={{
        //   clickable: false,
        // }}
        pagination={false}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={imagecaro1} width={730} height={730} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={imagecaro2} width={730} height={730} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={imagecaro1} width={730} height={730} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={imagecaro2} width={730} height={730} />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default playground;
