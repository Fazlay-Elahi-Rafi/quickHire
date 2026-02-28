import React from "react";
import Navbar from "../header/navbar";
import Image from "next/image";
import { Icon } from "@iconify/react";

import personImg from "../../../public/img/person.png";
import patternImg from "../../../public/img/pattern.png";

const Hero = () => {
  return (
    <>
      <header className="hero position-relative">
        <Navbar />
        <div className="container">
          <div className="container-wrapper">
            <div className="row justify-content-between position-relative z-1">
              <div className="col-xl-5 col-xxl-4 my-auto">
                <h1 className="hero__title mb-0">
                  Discover more than{" "}
                  <span className="text-info hero__title-sub">5000+ Jobs</span>
                </h1>
                <p className="hero__text">
                  Great platform for the job seeker that searching for new
                  career heights and passionate about startups.
                </p>
              </div>

              {/* <div className="hero__filter">
                <form>
                  <div className="">
                    <Icon
                      className="hero__filter-icon"
                      icon="mingcute:search-line"
                    />
                    <input type="text" placeholder="Job title or keyword" />
                  </div>
                  <div className="">
                    <Icon
                      className="hero__filter-icon"
                      icon="mingcute:search-line"
                    />
                    <select>
                      <option value="">Job1</option>
                      <option value="">Job2</option>
                    </select>
                  </div>
                </form>
              </div> */}

              <div className="hero__person col-5 d-none d-xl-block">
                <Image
                  className="img-fluid"
                  src={personImg}
                  width={500}
                  height={700}
                  unoptimized={true}
                  alt="person"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero__pattern">
          <Image
            className="img-fluid h-100"
            src={patternImg}
            width={860}
            height={794}
            unoptimized={true}
            alt="pattern"
          />
        </div>
      </header>
    </>
  );
};

export default Hero;
