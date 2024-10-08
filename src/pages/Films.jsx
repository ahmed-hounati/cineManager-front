import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Films() {
  return (
    <>
      <div>
        <section className="py-8">
          <h2 className="text-4xl text-center">Films</h2>
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
