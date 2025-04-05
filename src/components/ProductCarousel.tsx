import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useState, useCallback } from "react";
const productThumbnail = new URL(
  "../img/product-thumbnail.png",
  import.meta.url
);
const nextArrow = new URL("../img/next-arrow.svg", import.meta.url);
const prevArrow = new URL("../img/prev-arrow.svg", import.meta.url);

export default function ProductCarousel() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="big-container relative my-17 md:my-31">
      <h2 className="text-3xl leading-[1.6] text-center lato-regular">
        YOU MAY ALSO LIKE
      </h2>
      <div className="flex items-center justify-between mt-17 md:mt-5">
        <div
          className="md:inline-block hidden text-2xl mr-4 p-2 cursor-pointer"
          onClick={handlePrevious}
        >
          <img src={prevArrow.pathname} alt="Prev arrow"></img>
        </div>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1.2}
          spaceBetween={40}
          freeMode={true}
          navigation={false}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 55,
            },
          }}
        >
          <SwiperSlide>
            <div>
              <img
                src={productThumbnail.pathname}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <h3 className="text-base mt-4 lato-regular text-[#4D4D4D] leading-[1.6]">
                HAND POMADE / POMMADE MAINS
              </h3>
              <p className="text-base lato-light text-[#4D4D4D] leading-[1.6]">
                NOURISHMENT FOR YOUR HANDS
              </p>
              <p className="text-xl lato-regular text-[#4D4D4D] leading-[1.6] mt-8">
                159,00 KR
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src={productThumbnail.pathname}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <h3 className="text-base mt-4 lato-regular text-[#4D4D4D] leading-[1.6]">
                HAND POMADE / POMMADE MAINS
              </h3>
              <p className="text-base lato-light text-[#4D4D4D] leading-[1.6]">
                NOURISHMENT FOR YOUR HANDS
              </p>
              <p className="text-xl lato-regular text-[#4D4D4D] leading-[1.6] mt-8">
                159,00 KR
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src={productThumbnail.pathname}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <h3 className="text-base mt-4 lato-regular text-[#4D4D4D] leading-[1.6]">
                HAND POMADE / POMMADE MAINS
              </h3>
              <p className="text-base lato-light text-[#4D4D4D] leading-[1.6]">
                NOURISHMENT FOR YOUR HANDS
              </p>
              <p className="text-xl lato-regular text-[#4D4D4D] leading-[1.6] mt-8">
                159,00 KR
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src={productThumbnail.pathname}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <h3 className="text-base mt-4 lato-regular text-[#4D4D4D] leading-[1.6]">
                HAND POMADE / POMMADE MAINS
              </h3>
              <p className="text-base lato-light text-[#4D4D4D] leading-[1.6]">
                NOURISHMENT FOR YOUR HANDS
              </p>
              <p className="text-xl lato-regular text-[#4D4D4D] leading-[1.6] mt-8">
                159,00 KR
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img
                src={productThumbnail.pathname}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <h3 className="text-base mt-4 lato-regular text-[#4D4D4D] leading-[1.6]">
                HAND POMADE / POMMADE MAINS
              </h3>
              <p className="text-base lato-light text-[#4D4D4D] leading-[1.6]">
                NOURISHMENT FOR YOUR HANDS
              </p>
              <p className="text-xl lato-regular text-[#4D4D4D] leading-[1.6] mt-8">
                159,00 KR
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className="md:inline-block hidden text-2xl ml-4 p-2 cursor-pointer"
          onClick={handleNext}
        >
          <img src={nextArrow.pathname} alt="Next arrow"></img>
        </div>
      </div>
    </div>
  );
}
