import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

function Carousel() {
  return (
    <div className=" flex h-full w-full justify-center items-center bg-white">
      <div className=" z-20 overflow-x-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
              rewind: true, // Rewind to start when the end is reached
              speed: 1, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "180px", // Fixed width for each slide
            gap: "16px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img src="/dune.jpg" alt="dune" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
          <SplideSlide>
            <img src="/dune2.jpg" alt="dune2" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
          <SplideSlide>
            <img src="/fightclub.jpg" alt="fightclub" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
          <SplideSlide>
            <img src="/matrix.jpg" alt="matrix" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
          <SplideSlide>
            <img src="/oldboy.jpg" alt="oldboy" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
          <SplideSlide>
            <img src="/interstellar.jpg" alt="interstellar" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
          <SplideSlide>
            <img src="/theusualsus.jpg" alt="usual" className="w-[150px] h-[260px] rounded-3xl border border-solid" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Carousel;
