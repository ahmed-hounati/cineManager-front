import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Films() {
  return (
    <>
      <div>
        <section className="py-8">
          <div className="py-11 my-11">
            <Carousel />
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className="w-[400px] text-center">
              <p className="text-black text-2xl text-center">
                all this movies and more . Sign Up for Reserve your place. the
                places is limited...
              </p>
            </div>
            <div className="m-8 w-[140px] h-[60px] flex items-center justify-center rounded-xl bg-[#45b595] text-center">
              <Link to="/signup" className=" text-xl text-white">
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
