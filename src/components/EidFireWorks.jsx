import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import eidImg1 from "../assets/eid-pics/eid-pic.webp";
import eidImg2 from "../assets/eid-pics/eid-pic-2.webp";

const EidFireWorks = () => {
  const [showFireworks, setShowFireworks] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Start fading out after 4 seconds (before fully stopping at 6s)
    const fadeOutTimer = setTimeout(() => {
      setOpacity(0);
    }, 7000);

    // Stop fireworks completely after fade-out (6s)
    const stopTimer = setTimeout(() => {
      setShowFireworks(false);
    }, 8000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div className="relative z-100 ">
      {showFireworks && (
        <div
          className=" h-full fixed  bg-black/80 inset-0 transition-opacity duration-2000 ease-out flex flex-col  items-center"
          style={{ opacity }}
        >
          <div className="max-w-7xl max-h-8/12 mx-auto">
            <img src={eidImg1} className="w-full h-full" alt="" />
          </div>
          <Confetti width={width - 20} height={height} />
          <h2 className="absolute text-6xl text-center z-[200] text-white font-bold w-full fade-scale top-48 ">
            Eid Mubarak!!
          </h2>
          <h2 className="absolute text-7xl blur-2xl text-center z-[200] text-blue-400 font-bold w-full fade-scale top-48">
            Eid Mubarak!!
          </h2>

          <img
            className="absolute w-60 top-44 flex justify-center blur-2xl pt-24 "
            src={eidImg2}
            alt=""
          />
          <img
            className="absolute w-56 top-44 flex justify-center pt-24"
            src={eidImg2}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default EidFireWorks;
