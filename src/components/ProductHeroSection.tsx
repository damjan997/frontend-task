import { useState } from "react";

const heroImage = new URL("../img/hero-image.png", import.meta.url);
const backArrow = new URL("../img/back-arrow.svg", import.meta.url);
const infoIcon = new URL("../img/info-icon.svg", import.meta.url);

function ProductHeroSection() {
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const addToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setAddedToCart(true);
      setLoading(false);
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }, 1000);
  };
  return (
    <div className="relative w-full mb-10 flex md:gap-14 flex-col md:flex-row">
      {/* Mobile Back Button Section - Hidden od Desktop */}
      <div className="block md:hidden bg-[#F6F6F5] px-6 py-4">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <img src={backArrow.pathname} alt="back-arrow" />
          <span className="text-[11px] poppins-light text-[#4D4D4D]">
            ALL PRODUCTS / HAIRCARE / RESTORATIVE HAIR MASK
          </span>
        </div>
      </div>

      <div className="block md:absolute left-0 top-0 w-full max-w-full md:w-[calc(50%+180px)] md:max-w-[60%] xl:max-w-[65%] h-full">
        <img
          src={heroImage.pathname}
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full">
        <div className="big-container bg-[#F6F6F5] md:bg-transparent relative flex justify-end mx-auto pt-5 pb-12">
          <div className="w-full md:w-[35%] md:max-w-[400px] leading-[1.6] ">
            {/* Back Button with Text - Hidden on Mobile */}
            <div className="hidden md:flex items-center gap-2.5 -ml-6 cursor-pointer">
              <img src={backArrow.pathname} alt="back-arrow" />
              <span className="text-[11px] popins-light text-[#4D4D4D]">
                ALL PRODUCTS / HAIRCARE / RESTORATIVE HAIR MASK
              </span>
            </div>

            <h2 className="text-[28px] poppins-regular mt-4 text-[#4D4D4D]">
              RESTORATIVE HAIR MASK
            </h2>

            <p className="text-sm poppins-light mt-2 text-[#4D4D4D]">
              Nourishment in a bottle
            </p>

            <hr className="border-t border-[#9F938B] mt-5" />

            <p className="text-sm poppins-light mt-3.5 text-[#4D4D4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
              commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor
              posuere ac ut.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-9 text-[#948282] text-sm poppins-medium">
              <div className="flex items-center">
                <img
                  src={infoIcon.pathname}
                  alt="Info Icon 1"
                  className="w-14 h-14 mr-2.5"
                />
                <span className="text-sm">100% ORGANIC</span>
              </div>
              <div className="flex items-center">
                <img
                  src={infoIcon.pathname}
                  alt="Info Icon 2"
                  className="w-14 h-14 mr-2.5"
                />
                <span className="text-sm">100% ORGANIC</span>
              </div>
              <div className="flex items-center">
                <img
                  src={infoIcon.pathname}
                  alt="Info Icon 3"
                  className="w-14 h-14 mr-2.5"
                />
                <span className="text-sm">100% ORGANIC</span>
              </div>
              <div className="flex items-center">
                <img
                  src={infoIcon.pathname}
                  alt="Info Icon 4"
                  className="w-14 h-14 mr-2.5"
                />
                <span className="text-sm">100% ORGANIC</span>
              </div>
            </div>

            <hr className="border-t border-[#9F938B] mt-9" />

            <div className="mt-8 text-base poppins-light text-[#4D4D4D]">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  defaultChecked
                  className="mr-2"
                />
                Buy Once | $38
              </label>
              <label className="flex items-center mt-7">
                <input type="radio" name="option" className="mr-2" />
                Subscribe (SAVE 20%) | $30
              </label>
            </div>

            <div className="flex items-center gap-4 mt-12">
              <div className="flex items-center border border-black overflow-hidden h-10">
                <button className="w-10 h-full lato-regular flex justify-center items-center text-lg">
                  -
                </button>
                <input
                  type="number"
                  defaultValue={1}
                  className="w-12 h-full text-center outline-none"
                />
                <button className="w-10 h-full flex justify-center items-center text-lg">
                  +
                </button>
              </div>

              <button
                onClick={addToCart}
                className="flex-1 flex gap-1 items-center justify-center text-base lato-regular h-11 bg-[#BFABAB] text-[#4D4D4D] px-4 uppercase cursor-pointer"
              >
                Add to Cart
                {loading && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-spin lucide lucide-loader-circle-icon lucide-loader-circle"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                )}
              </button>
            </div>
            <p className={addedToCart ? "opacity-100" : "opacity-0"}>
              Product successfully added to cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductHeroSection;
