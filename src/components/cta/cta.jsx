import Image from "next/image";
import React from "react";

import ctaImg from "../../../public/img/cta-img.png";

const Cta = () => {
  return (
    <>
      <div className="cta">
        <div className="container pxsm-0">
          <div className="row">
            <div className="cta__wrap">
              <div className="col-lg-4">
                <h2 className="qh-heading text-center text-sm-start">
                  Start posting jobs today
                </h2>
                <p className="cta__text text-center text-sm-start">
                  Start posting jobs for only $10
                </p>
                <a
                  href="#"
                  className="qh-btn-white w-100 w-lg-auto text-center"
                >
                  Sign Up For Free
                </a>
              </div>
              <div className="">
                <Image
                  className="img-fluid cta__img"
                  src={ctaImg}
                  width={564}
                  height={346}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
