"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { HCTopArr } from "../home/HomeTopCar";
import { Fragment } from "react";
import Image from "next/image";

const LuCarousel = () => {
  const carouselSettings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="mt-5 h-[25vh] w-full pl-4 pr-4">
      <div className="h-full w-full overflow-hidden rounded-lg bg-white relative">
        <Slider {...carouselSettings} className="w-full h-full">
          {HCTopArr.map((data, idx) => (
            <Fragment key={idx}>
              <Image src={data} alt="" className="w-full h-full object-cover" />
            </Fragment>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LuCarousel;
