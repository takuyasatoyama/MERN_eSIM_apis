import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const Landing = () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <div className="w-[100%] bg-gray-200">
      <div className="about text-center bg-white p-1">
        <h2>Ready to Roam?</h2>
        <p>
          Explore our range of flexible plans and start your journey with ARKA
          ROAM today, Stay connected, stay global!
        </p>
      </div>

			<div className="w-[70%] mx-auto mt-3">
      	<input type="search" placeholder="search" className="form-control" />
			</div>

      <div className="text-center my-3 w-[100%]">
        <Button
          className="border-white w-[30%] mx-1"
          style={{ backgroundColor: "#00274C" }}
          size="lg"
        >
          LOCAL
        </Button>
        <Button className="border-white w-[30%] mx-1" variant="secondary" size="lg">
          GLOBAL
        </Button>
        <Button className="border-white w-[30%] mx-1" variant="secondary" size="lg">
          REGIONAL
        </Button>
      </div>

      <Swiper modules={[Virtual]} spaceBetween={1} slidesPerView={6} virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <div className="flex flex-col items-center">
              <img src="/images/vector.png" alt="" />
              <p>UAE</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="px-3">
        <div className="flex w-full justify-between items-center mb-2 border-2 bg-white border-black rounded-md">
          <img src="/images/vector.png" className="w-[15%] h-auto m-auto" alt="" />
          <div className="text-center p-3 border-l-2 border-r-2 border-black h-full">
            <p className="m-0 text-left">4G LTE</p>
            <p className="m-0">5G ON</p>
            <p className="m-0">Available</p>
          </div>
          <div className="p-3 flex flex-col items-center w-[50%]">
            <h6>DATA & MINUTES</h6>
            <h2>TAILAND</h2>
            <Button
              className="border-black"
              style={{ backgroundColor: "#00274C" }}
            >
              FROM $10 USD
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mb-2 border-2 bg-white border-black rounded-md">
          <img src="/images/vector.png" className="w-[15%] h-auto m-auto" alt="" />
          <div className="text-center p-3 border-r-2 border-l-2 h-full border-black">
            <p className="m-0 text-left">4G LTE</p>
            <p className="m-0">5G ON</p>
            <p className="m-0">Available</p>
          </div>
          <div className="p-3 flex flex-col items-center w-[50%]">
            <h6>DATA & MINUTES</h6>
            <h2>TAILAND</h2>
            <Button
              className="border-black"
              style={{ backgroundColor: "#00274C" }}
            >
              FROM $10 USD
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mb-2 border-2 bg-white border-black rounded-md">
          <img src="/images/vector.png" className="w-[15%] h-auto m-auto" alt="" />
          <div className="text-center p-3 border-r-2 border-l-2 h-full border-black">
            <p className="m-0 text-left">4G LTE</p>
            <p className="m-0">5G ON</p>
            <p className="m-0">Available</p>
          </div>
          <div className="p-3 flex flex-col items-center w-[50%]">
            <h6>DATA & MINUTES</h6>
            <h2>TAILAND</h2>
            <Button
              className="border-black"
              style={{ backgroundColor: "#00274C" }}
            >
              FROM $10 USD
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <Button
          className="border-black m-auto mt-3"
          style={{ backgroundColor: "#00274C" }}
        >
          Load more +
        </Button>
      </div>
    </div>
  );
};

export default Landing;
