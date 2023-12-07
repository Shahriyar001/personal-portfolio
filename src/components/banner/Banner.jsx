import React from "react";
import img1 from "./imgs/my-bg-1.png";
import pdf from "../../pdf/Shahriyar_resume.pdf";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img1}
            alt="dp"
            className="lg:max-w-md md:max-w-md max-w-xs ml-6  rounded-lg shadow-2xl"
          />
          <div className="text-white">
            <h1 className="text-3xl font-bold">
              Shahriyar is a{" "}
              <span className="text-[#b86acd]">web developer</span> and <br />{" "}
              <span className="text-[#b86acd]">web designer</span>
            </h1>
            <p className="py-6">
              He crafts responsive websites where technologies <br /> meet
              creativity
            </p>
            <div>
              <button className="btn btn-outline  text-white">
                <a href={pdf} download="Shahriyar_resume.pdf">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
